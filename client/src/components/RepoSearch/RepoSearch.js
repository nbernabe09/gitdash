import React             from "react";
import { Switch, Route } from "react-router-dom";
import "./RepoSearch.css";

// Import MDL React Components
import { Layout } from 'react-mdl'

// Import Project Components
import SearchForm from "../SearchForm";
import Results from "../Results";
import Main from "../Main";


const Content = props =>
  <Main className="">
    <Switch>
      <Route path="/" exact component={SearchForm} />
      <Route path="/search" component={Results}    />
    </Switch>
  </Main>

export default Content;
