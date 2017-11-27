import React from "react";
import "./Body.css";
import { Layout } from 'react-mdl'
import Header from "../Header";
import Drawer from "../Drawer";
import Main from "../Main";
import SearchForm from "../SearchForm";
import Results from "../Results";
import { Switch, Route } from "react-router-dom";

const Body = props =>
  <Layout fixedDrawer={true} className="dash-layout">
    <Header />
    <Drawer />
    <Main>
      <Switch>
        <Route exact path="/" component={SearchForm} />
        <Route path="/search" component={Results} />
      </Switch>
    </Main>
  </Layout>

export default Body;
