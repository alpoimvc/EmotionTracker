import React, { Component } from 'react'
var NavLink = require("react-router-dom").NavLink;

export default class Nav extends Component {
  renderNav = () => {
    return (
      <div className="nav">
        <li>
          <NavLink activeClassName="active" to="/emotion">
            Emotion
        </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/history">
            History
        </NavLink>
        </li>
      </div>
    )
  }

  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/createAccount">
            Register
          </NavLink>
        </li>
        {this.props.userLoggedIn && this.renderNav()}

      </ul>
    )
  }
}

