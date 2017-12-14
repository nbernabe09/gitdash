import React, { Component } from "react";
import "./Auth.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';

class Auth extends Component {
  signInUser() {
    axios.get('/auth/github/login').then(res => console.log(res.data));
  }

  render() {
    return (
      <div>{this.signInUser()}</div>
    )
  }
}

export default Auth;
