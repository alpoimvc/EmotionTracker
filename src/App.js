import React, { Component } from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Emotion from "./components/Emotion";
import './App.css';
import CreateAccount from './components/CreateAccount';

var ReactRouter = require("react-router-dom");
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/emotion" component={Emotion} />
            <Route render={() => {
              return <p>Not found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}
