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
import Login      from "../Login";

const Body = props => <Layout fixedDrawer={true} fixedHeader={true} className="dash-layout">
      <NavHeader />
      <NavDrawer />
      <Main className="pa-0">
        <Switch>
          <Route exact path="/" component={RepoSearch} />
          <Route path="/search" component={RepoSearch} />
          <Route path="/saved"  component={RepoViewer} />
          <Route path="/login"  component={Login} />
        </Switch>
      </Main>
    </Layout>


export default Body;
