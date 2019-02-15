import React, { Component } from 'react';
var NavLink = require("react-router-dom").NavLink;

export default function Nav() {
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
          Create Account
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/Emotion">
          Emotion
        </NavLink>
      </li>
    </ul>
  )
}
