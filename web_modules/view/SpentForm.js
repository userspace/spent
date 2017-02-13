import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { Link } from 'react-router'
import moment from 'moment'

class SpentFormClass extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.initialState()
  }

  initialState() {
    return {
      cost: '',
      when: moment().format("YYYY-MM-DDTHH:mm:ss"),
      name: '',
      quantity: 1,
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.cost === '' && !(parseInt(this.state.cost) > 0)) return;
    this.props.onSubmit({...this.state})
    this.setState( this.initialState() )
    this.firstInput.focus()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="row">
          <div className="col-md-12 text-center">
            <button className="btn btn-danger">egreso</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group ">
                <label className="control-label">Success inputs</label>
                <input type="number" autoFocus tabIndex="1" name="cost" value={this.state.cost} onChange={this.handleInputChange} placeholder="costo" className="form-control" ref={(input) => this.firstInput = input}/>
                <span className="material-input"></span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group ">
                <label className="control-label">Success input</label>
                <input type="text" value={this.state.name} name="name" tabIndex="2"  onChange={this.handleInputChange} placeholder="nombre" className="form-control" />
                <span className="material-input"></span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group ">
                <label className="control-label">Success input</label>
                <input type="datetime-local" tabIndex="3" name="when" value={this.state.when} onChange={this.handleInputChange} placeholder="cuando" className="form-control" />
                <span className="material-input"></span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}



export default SpentFormClass
