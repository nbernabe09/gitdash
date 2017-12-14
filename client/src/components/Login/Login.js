import React, { Component } from "react";
import "./Login.css";
import ContainerCard from "../ContainerCard";
import axios from 'axios';
import { Redirect } from 'react-router';

class Login extends Component {
  render() {
    return (
      <ContainerCard title="login">>
            <button
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
              onClick={() => <Redirect to="/auth/github" />}
              data-upgraded=",MaterialButton,MaterialRipple"
            >
            Login
            </button>
      </ContainerCard>
    )
  }
}

export default Login;
