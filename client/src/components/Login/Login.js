import React, { Component } from "react";
import "./Login.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';

class Login extends Component {

  signInUser() {
    axios.get('/auth/github').then(res => console.log(res.data));
  }
  render() {
    return (
      <ContainerCard title="login">
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => this.signInUser()}
            data-upgraded=",MaterialButton,MaterialRipple"
          >
          Login
          </button>
      </ContainerCard>

    )
  }
}

export default Login;
