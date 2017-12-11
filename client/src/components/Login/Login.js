import React from "react";
import "./Login.css";

import ContainerCard from "../ContainerCard";

const Login = props =>
  <ContainerCard title="login">
    <p>Does this work</p>
    <a href="/auth/github">
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
      type="submit"
      data-upgraded=",MaterialButton,MaterialRipple"
    >
    Login
    </button>
    </a>
  </ContainerCard>

export default Login;
