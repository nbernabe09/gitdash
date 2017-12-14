import React, { Component } from "react";
import "./Auth.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';

function refreshPage() {
  window.location.reload();
}

class Auth extends Component {
  render() {
    return (
      <div>{refreshPage()}</div>
    )
  }
}

export default Auth;
