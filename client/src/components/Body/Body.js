import React             from "react";
import "./Body.css";
import { Switch, Route } from "react-router-dom";

// Import MDL React Components
import { Layout } from 'react-mdl'

// Import Project Components
import NavHeader  from "../NavHeader";
import NavDrawer  from "../NavDrawer";
import Main       from "../Main";
import RepoSearch from "../RepoSearch";
import RepoViewer from "../RepoViewer";

const Body = props =>
  <Layout fixedDrawer={true} fixedHeader={true} className="dash-layout">
    <NavHeader />
    <NavDrawer />
    <Main className="pa-0">
      <Switch>
        <Route exact path="/" component={RepoSearch} />
        <Route path="/search" component={RepoSearch} />
        <Route path="/saved"  component={RepoViewer} />
      </Switch>
    </Main>
  </Layout>

export default Body;
