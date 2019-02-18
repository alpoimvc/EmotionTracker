import React, { Component } from 'react';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //var users = JSON.parse(localStorage.getItem('user'));
  }

  handleChange(event) {
    event.target.name === "username" && this.setState({ username: event.target.value });
    event.target.name === "password" && this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    var newUser = {
      username: this.state.username,
      password: this.state.password
    }

    //localStorage.removeItem("users");
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('users'));
    if (a === null) {
      a = [];
    }
    // Push the new data onto the array
    a.push(newUser);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('users', JSON.stringify(a));
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
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
      </div>
    )
  }
}


