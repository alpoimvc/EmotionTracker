import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //var a = JSON.parse(localStorage.getItem('users'));
  }

  handleChange(event) {
    event.target.name === "username" && this.setState({ username: event.target.value }); event.target.name === "password" && this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    //Get the users array from localStorage
    var usersArray = JSON.parse(localStorage.getItem('users'));
    //Check if there's a user with those credentials
    var checkUser = usersArray.filter(x => x.username === this.state.username && x.password === this.state.password);

    if (checkUser[0]) {
      this.props.handleSubmit(checkUser[0].username);
    }

  }

  render() {
    return (
      <div className="container">
        <h2 className="formHeader">Please enter your details</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.state.username}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              autoComplete='off'
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}


