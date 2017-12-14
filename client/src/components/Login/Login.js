import React, { Component } from "react";
import "./Login.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {

  signInUser() {
    axios.get('/auth/github').then(res => console.log(res.data));
  }
  render() {
    return (
      <ContainerCard title="login">
        <Link to="/auth/github">
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          >
            Login
          </button>
        </Link>
      </ContainerCard>
    )
  }
}

export default Login;
