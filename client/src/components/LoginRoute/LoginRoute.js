import React, { Component } from "react";
import "./LoginRoute.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';
import Auth from '../Auth';
import Login from '../Login';
import { Switch, Route } from "react-router-dom";

class LoginRoute extends Component {

  signInUser() {
    axios.get('/auth/github').then(res => console.log(res.data));
  }
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/auth/github" component={Auth} />
      </Switch>
    )
  }
}

export default LoginRoute;
