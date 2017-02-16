import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { parse } from 'userspace-sdk-js'
import { Link } from 'react-router'
import { SpentForm, SpentList, SpentGraph, Loading } from 'view'
import moment from 'moment'

moment.locale("es")

const Parse = parse();

const Spent = Parse.Object.extend("Spent");

Parse.login(localStorage.id_token);

const normalize = spent => ({ ...spent.attributes,
  id: spent.id
})

const Home = ({list, add, increment, decrement, remove}) =>
<div className="container">
    <div className="row" id="new-spent" >
      <SpentForm onSubmit={add}/>
    </div>
    <div className="row">
      <SpentList list={list.map(normalize)} increment={increment} decrement={decrement} remove={remove}/>
    </div>
    <div className="row">
      <SpentGraph list={list.map(normalize)} />
    </div>
</div>

class HomeClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      loading: true,
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  searchForLastSpentItems() {
    return new Parse.Query(Spent)
      .addDescending("when")
      .find();
  }

  componentDidMount() {
    this.searchForLastSpentItems()
      .then(list => this.setState({list, loading: false}))
  }

  handleAdd(data) {
    this.setState({loading: true}, () => new Spent()
      .save({...data})
      .then(this.searchForLastSpentItems)
      .then(list =>  this.setState({list, loading: false}))
    )
  }

  handleIncrement(spent) {
    this.setState({loading: true}, () => Spent.createWithoutData(spent.id)
      .set("quantity", spent.quantity+1)
      .save()
      .then(this.searchForLastSpentItems)
      .then(list =>  this.setState({list, loading: false}))
    )
  }

  handleDecrement(spent) {
    this.setState({loading: true}, () => Spent.createWithoutData(spent.id)
      .set("quantity", spent.quantity-1)
      .save()
      .then(this.searchForLastSpentItems)
      .then(list =>  this.setState({list, loading: false}))
    )
  }

  handleRemove(spent) {
    this.setState({loading: true}, () => Spent.createWithoutData(spent.id)
      .destroy()
      .then(this.searchForLastSpentItems)
      .then(list =>  this.setState({list, loading: false}))
    )
  }

  render() {
    const home = <Home
      list={this.state.list}
      add={this.handleAdd}
      remove={this.handleRemove}
      increment={this.handleIncrement}
      decrement={this.handleDecrement}
    />;
    return this.state.loading ? <Loading>{home}</Loading> : home;
  }
}


export default HomeClass;
