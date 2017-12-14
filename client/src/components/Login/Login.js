import React, { Component } from "react";
import "./Login.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';

class Login extends Component {
  render() {
    return (
      <ContainerCard title="login">
          <a href="/auth/github">
            <button
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
              onClick={() => this.signInUser()}
              data-upgraded=",MaterialButton,MaterialRipple"
            >
            Login
            </button>
          </a>
      </ContainerCard>
    )
  }
}

export default Login;
