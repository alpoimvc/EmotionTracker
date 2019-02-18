import React, { Component } from 'react';

export default class Emotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostFrequentEmotion: ""
    };
  }

  createEmotionList = (a) => {
    let list = [];

    for (let i = 0; i < a.length; i++) {
      let dt = a[i].date;
      list.push(<li key={dt}>{dt + " " + a[i].emotion}</li>);
    }
    return list;
  }

  getUserEmotions = (a) => {
    return a.filter(x => x.user === this.props.userLoggedIn);
  }

  getMostCommon = (a) => {
    //Create new array with the most frequent emotion
    let newArray = [];
    let mostFrequentEmotion = "";
    for (let i = 0; i < a.length; i++) {
      let tempArray = a.filter(x => x.emotion === a[i].emotion);
      //TODO:doesn't take into account when there's an equal count
      if (tempArray.length > newArray.length) {
        newArray = tempArray;
      }
    }
    return newArray[0].emotion;
  }

  renderHistory = () => {
    //Get emotions array
    let a = JSON.parse(localStorage.getItem('emotions'));
    if (a) {
      let userEmotions = this.getUserEmotions(a);
      let mostFrequentEmotion = this.getMostCommon(userEmotions);
      let list = this.createEmotionList(userEmotions);

      return (
        <div className="container">
          <div className="centerContent">
            <h1 className="header">What you feel most like</h1>{mostFrequentEmotion}
          </div>
          <div className="centerContent">
            <h1>Previous days</h1>
            <ul className="horizontalList">
              {list}
            </ul>
          </div>
        </div>
      )
    } else {
      return <h1>There are no records</h1>
    }
  }

  renderNotLoggedIn = () => {
    return (
      <h1>Please log in to access this page</h1>
    )
  }

  render() {
    const userLoggedIn = this.props.userLoggedIn;
    return (
      <div className="container">
        {userLoggedIn ? this.renderHistory() : this.renderNotLoggedIn()}
      </div>
    )
  }
}


