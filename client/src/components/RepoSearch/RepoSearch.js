import React             from "react";
import { Switch, Route } from "react-router-dom";
import "./RepoSearch.css";

// Import MDL React Components
import { Layout } from 'react-mdl'

// Import Project Components
import SearchForm from "../SearchForm";
import Results from "../Results";
import Main from "../Main";


const RepoSearch = props =>
  <Main className="">
    <Switch>
      <Route path="/" exact render={(props2) => (
        <SearchForm {...props} />
      )} />
      <Route path="/search" render={(props2) => (
        <Results {...props} />
          )} />
    </Switch>
  </Main>

export default RepoSearch;
