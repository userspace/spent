import React from 'react';
import ReactDOM from 'react-dom';
import connect from 'lib/connect'
import { urls } from 'userspace-sdk-js'
import { Link } from 'react-router'
import { SpentForm, SpentList, SpentGraph } from 'view'
import moment from 'moment'

moment.locale("es")

const normalize = spent => ({ ...spent,
  since: moment(spent.when, "YYYY-MM-DDTHH:mm:ss").fromNow()
})

const Home = ({list, add}) =>
<div className="container">
    <div className="row" id="new-spent" >
      <SpentForm onSubmit={add}/>
    </div>
    <div className="row">
      <SpentList list={list.map(normalize)} />
    </div>
    <div className="row">
      <SpentGraph list={list} />
    </div>
</div>

class HomeClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {objectId: "18", cost: "1500"    , when: "2017/02/13T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "19", cost: "141.75"  , when: "2017/02/13T02:21:02", name: "regalo", quantity: 1},
        {objectId: "20", cost: "566.87"  , when: "2017/02/13T02:21:02", name: "kiosko", quantity: 1},
        {objectId: "21", cost: "529.56"  , when: "2017/02/13T02:21:02", name: "kiosko", quantity: 1},
        {objectId: "22", cost: "1900"    , when: "2017/02/10T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "23", cost: "177"     , when: "2017/02/09T02:21:02", name: "kiosko", quantity: 1},
        {objectId: "24", cost: "1900"    , when: "2017/02/08T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "25", cost: "78"      , when: "2017/02/08T02:21:02", name: "regalo", quantity: 1},
        {objectId: "26", cost: "1900"    , when: "2017/02/06T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "27", cost: "75"      , when: "2017/02/06T02:21:02", name: "regalo", quantity: 1},
        {objectId: "28", cost: "1900"    , when: "2017/02/06T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "29", cost: "481.15"  , when: "2017/02/06T02:21:02", name: "regalo", quantity: 1},
        {objectId: "30", cost: "3200"    , when: "2017/02/02T02:21:02", name: "kiosko", quantity: 1},
        {objectId: "31", cost: "246.66"  , when: "2017/02/01T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "32", cost: "265.91"  , when: "2017/02/01T02:21:02", name: "kiosko", quantity: 1},
        {objectId: "33", cost: "999.87"  , when: "2017/01/31T02:21:02", name: "kiosko", quantity: 1},
        {objectId: "34", cost: "1300"    , when: "2017/01/30T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "35", cost: "1300"    , when: "2017/01/30T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "36", cost: "730"     , when: "2017/01/27T02:21:02", name: "regalo", quantity: 1},
        {objectId: "37", cost: "1300"    , when: "2017/01/25T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "38", cost: "889.94"  , when: "2017/01/23T02:21:02", name: "regalo", quantity: 1},
        {objectId: "39", cost: "6500"    , when: "2017/01/23T02:21:02", name: "regalo", quantity: 1},
        {objectId: "40", cost: "1900"    , when: "2017/01/23T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "41", cost: "393.05"  , when: "2017/01/23T02:21:02", name: "kiosko", quantity: 1},
        {objectId: "42", cost: "1186.30" , when: "2017/01/18T02:21:02", name: "regalo", quantity: 1},
        {objectId: "43", cost: "1900"    , when: "2017/01/17T02:21:02", name: "un taxi", quantity: 1},
        {objectId: "44", cost: "900"     , when: "2017/01/17T02:21:02", name: "regalo", quantity: 1},
      ],
      nextId: 4
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(data) {
    data.objectId = this.state.nextId;
    this.setState({
      list: [data].concat(this.state.list),
      nextId: this.state.nextId+1
    })
  }

  render() {
    return <Home list={this.state.list} add={this.handleAdd} />
  }
}


export default HomeClass;
