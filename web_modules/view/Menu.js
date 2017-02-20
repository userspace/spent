import React from 'react';
import ReactDOM from 'react-dom';
import { urls } from 'userspace-sdk-js';
var Menu = ({onClick, open}) =>
  <span className={ open ? "dropdown open" : "dropdown"}>
      <a onClick={onClick} className="dropdown-toggle btn btn-simple" data-toggle="dropdown" aria-expanded="false">
      <div className="profile-photo-small">
          <img src="assets/img/favicon.png" width={60} className="img-circle img-responsive"/>
      </div>
        <div className="ripple-container"></div>
      </a>
      <ul className="dropdown-menu dropdown-menu-left">
        <li className="dropdown-header">http://user.space</li>
        <li><a href={urls.login()}>Change user</a></li>
        <li><a href={urls.myuserspace()}>Go to https://my.user.space</a></li>
        <li><a href={urls.dashboard(localStorage)}>Dashboard</a></li>
      </ul>
    </span>

class MenuClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  handleClick = () => this.setState({open: !this.state.open})
  render() {
    return <Menu onClick={this.handleClick} open={this.state.open}/>
  }
}

export default MenuClass
