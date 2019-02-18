import React, { Component } from 'react';

export default class Emotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      selectedEmotion: ""
    };
  }

  handleChange = (event) => {
    let todayemotion = event.target.value;
    //get todays date
    let dateObj = new Date();
    let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    let date = ('0' + dateObj.getDate()).slice(-2);
    let year = dateObj.getFullYear();
    let shortDate = year + '/' + month + '/' + date;

    this.setState({
      selectedEmotion: todayemotion
    });
    //this.props.handleChange(emotion, date);

    let newEmotion = {
      emotion: todayemotion,
      date: shortDate,
      user: this.props.userLoggedIn
    };

    //localStorage.removeItem("emotions");
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('emotions'));
    if (a == null) {
      a = [];
    }
    // Push the new data onto the array
    a.push(newEmotion);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('emotions', JSON.stringify(a));
  }

  render() {
    const userLoggedIn = this.props.userLoggedIn;
    if (userLoggedIn) {
      return (
        <div className="centerContent">
          <div className="form-group">
            <h1 className="formHeader">How are you feeling today ?</h1>
            <select className="form-control select" onChange={this.handleChange}>
              <option value="Happy">Select an option</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Okay">Okay</option>
              <option value="Depressed">Depressed</option>
              <option value="Bored">Bored</option>
              <option value="Peaceful">Peaceful</option>
            </select>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h1>Please log in to access this page</h1>
        </div>
      )
    }

  }
}


