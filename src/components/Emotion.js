import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  handleChange(event) {
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <div className="home-container">
        <h1>How are you feeling today ?</h1>
        <select>
          <option value="volvo">Happy</option>
          <option value="saab">Sad</option>
          <option value="mercedes">Okay</option>
          <option value="audi">Depressed</option>
          <option value="audi">Bored</option>
          <option value="audi">Peaceful</option>
        </select>
      </div>
    )
  }
}


