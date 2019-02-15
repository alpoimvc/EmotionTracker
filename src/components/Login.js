import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "", password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    var a = JSON.parse(localStorage.getItem('users'));
  }

  handleChange(event) {
    { event.target.name == "username" && this.setState({ username: event.target.value }); }
    { event.target.name == "password" && this.setState({ password: event.target.value }); }
  }

  handleSubmit(event) {
    event.preventDefault();
    var usersArray = JSON.parse(localStorage.getItem('users'));

    var checkUser = usersArray.some(x => x.username === this.state.username && x.password === this.state.password);
    if (checkUser === true) this.props.history.push("/emotion");
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


