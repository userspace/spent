import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'

const SpentForm = ({handleSubmit, handleInputChange, spent}) =>
<form onSubmit={handleSubmit} >
  <div className="row">
    <div className="col-md-12 text-center">
      <button className="btn btn-danger">egreso</button>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div className="form-group ">
          <label className="control-label">Success inputs</label>
          <input type="number" tabIndex="1" name="cost" value={spent.cost} onChange={handleInputChange} placeholder="costo" className="form-control" />
          <span className="material-input"></span>
      </div>
    </div>
    <div className="col-md-4">
      <div className="form-group ">
          <label className="control-label">Success input</label>
          <input type="text" value={spent.name} name="name" tabIndex="2"  onChange={handleInputChange} placeholder="nombre" className="form-control" />
          <span className="material-input"></span>
      </div>
    </div>
    <div className="col-md-4">
      <div className="form-group ">
          <label className="control-label">Success input</label>
          <input type="datetime-local" tabIndex="3" name="when" value={spent.when} onChange={handleInputChange} placeholder="cuando" className="form-control" />
          <span className="material-input"></span>
      </div>
    </div>
  </div>
</form>

class SpentFormClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
  }

  initialState = () => ({
    cost: '',
    when: moment().format("YYYY-MM-DDTHH:mm:ss"),
    name: '',
    quantity: 1,
  })

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = {...this.state};

    if (data.cost === '' && !(parseInt(data.cost) > 0)) return;
    data.cost = parseInt(data.cost)

    this.props.onSubmit(data)
    this.setState( this.initialState )
  }

  render() {
    return <SpentForm spent={this.state}
      handleSubmit={this.handleSubmit}
      handleInputChange={this.handleInputChange}
    />;
  }
}



export default SpentFormClass
