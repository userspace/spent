import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Slider from 'rc-slider/lib/Slider';

const LabelForDay = ({value, day, handler}) =>
  <span
    className={value === day ? "label label-primary" : "label label-default"}
    onClick={() => handler(day)}
  >
    { day === 0 ? 'Today' : moment().add(day, 'day').format('DD/MM')}
  </span>

const range = (from, to) => Array.from({length: to-from+1}, (v, i) => i+from)

const SpentForm = ({handleSubmit, handleInputChange, handleSliderChange, handleDayChange, spent}) =>
<form onSubmit={handleSubmit} >
  <div className="row">
    <div className="col-md-12 text-center">
      <div>
        {range(-3,2).map(day => <LabelForDay key={day} value={spent.day} day={day} handler={handleDayChange} />) }
      </div>
      around {spent.hour}hs
      <Slider max={23} onChange={handleSliderChange} value={spent.hour}/>
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
          <button className="btn btn-danger">egreso</button>
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
    hour: parseInt(moment().format("HH")),
    day: 0,
    name: '',
  })

  handleDayChange = (value) => {
    this.setState({
      ["day"] : value,
    })
  }
  handleSliderChange = (value) => {
    this.setState({
      ["hour"] : value
    })
  }
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
    if (this.state.cost === '' && !(parseInt(this.state.cost) > 0)) return;

    this.props.onSubmit({
      cost: parseInt(this.state.cost),
      name: this.state.name,
      quantity: 1,
      when: moment().add(this.state.day,'day').hours(this.state.hour).format('YYYY-MM-DDTHH:mm:ss')
    })
    this.setState( this.initialState )
  }

  render() {
    return <SpentForm spent={this.state}
      handleSubmit={this.handleSubmit}
      handleDayChange={this.handleDayChange}
      handleSliderChange={this.handleSliderChange}
      handleInputChange={this.handleInputChange}
    />;
  }
}



export default SpentFormClass
