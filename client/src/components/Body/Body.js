import React             from "react";
import "./Body.css";
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';

// Import MDL React Components
import { Layout } from 'react-mdl'

// Import Project Components
import NavHeader  from "../NavHeader";
import NavDrawer  from "../NavDrawer";
import Main       from "../Main";
import RepoSearch from "../RepoSearch";
import RepoViewer from "../RepoViewer";
import Login      from "../Login";

class Body extends React.Component {
  state = {
    loggedIn: false
  }

  render() {
    const { loggedIn } = this.state;
    console.log(loggedIn)
    return <Layout fixedDrawer={true} fixedHeader={true} className="dash-layout">
        <NavHeader />
        <NavDrawer />
        <Main className="pa-0">
          <Switch>
            <Route exact path="/" component={RepoSearch} />
            <Route path="/search" component={RepoSearch} />
            <Route path="/saved" component={RepoViewer} />
            <Route path="/login" component={Login} />
          </Switch>
          { this.state.loggedIn || <Redirect to="/login" /> }
        </Main>
      </Layout>
  }
}


export default Body;
