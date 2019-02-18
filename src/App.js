import React, { Component } from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Emotion from "./components/Emotion";
import History from "./components/History";
import CreateAccount from './components/CreateAccount';

import './App.css';

let ReactRouter = require("react-router-dom");
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: ""
    };
  }

  handleSubmit = (user) => {
    this.setState({
      userLoggedIn: user
    })
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Nav userLoggedIn={this.state.userLoggedIn} />
          <div className="home-container">
            <Switch>
              <Route exact path="/" component={Home} />) />
            <Route exact path="/login" render={() => (<Login handleSubmit={this.handleSubmit} />)} />
              <Route exact path="/createAccount" component={CreateAccount} />
              <Route exact path="/emotion" render={() => (<Emotion userLoggedIn={this.state.userLoggedIn} />)} />
              <Route exact path="/history" render={() => (<History userLoggedIn={this.state.userLoggedIn} />)} />
              <Route render={() => {
                return <p>Not found</p>
              }} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
