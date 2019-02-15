import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Mark how you're feeling each day and follow your history</h1>

        <Link className="button" to="/emotion">
          Emotion
        </Link>

      </div>
    )
  }
}


