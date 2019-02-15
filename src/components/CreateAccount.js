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
    { event.target.name == "username" && this.setState({ username: event.target.value }); }
    { event.target.name == "password" && this.setState({ password: event.target.value }); }
  }

  handleSubmit(event) {
    event.preventDefault();

    var newUser = {
      username: this.state.username,
      password: this.state.password
    }

    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('users'));
    if (a == null) {
      a = [];
    }
    // Push the new data onto the array
    a.push(newUser);
    // Alert the array value
    for (let i = 0; i < a.length; i++) {
      alert(a[i].username);
    }
    // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('users', JSON.stringify(a));
  }

  render() {
    return (
      <div className="home-container">
        <form onSubmit={this.handleSubmit}>
          Username:<br />
          <input
            type="text"
            name="username"
            value={this.state.username}
            autoComplete='off'
            onChange={this.handleChange} />
          <br />
          Password:<br />
          <input
            type="text"
            name="password"
            value={this.state.password}
            autoComplete='off'
            onChange={this.handleChange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


