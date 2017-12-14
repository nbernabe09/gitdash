import React, { Component } from "react";
import "./Auth.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';
import { Redirect } from 'react-router';

function refreshPage() {
  window.location.reload();
}

class Auth extends Component {
  componentDidMount() {
    refreshPage();
    refreshPage();
    refreshPage();
  }

  render() {
    return <div />
  }
}

export default Auth;
