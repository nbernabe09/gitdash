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
import LoginRoute      from "../LoginRoute";

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

class Body extends React.Component {
  loggedIn() {
    return getCookie("session") !== "";
  }

  render() {
    return <Layout fixedDrawer={true} fixedHeader={true} className="dash-layout">
        <NavHeader />
        <NavDrawer />
        <Main className="pa-0">
          <Switch>
            <Route exact path="/" component={RepoSearch} />
            <Route path="/search" component={RepoSearch} />
            <Route path="/saved" component={RepoViewer} />
            <Route path="/login" component={LoginRoute} />
          </Switch>
        </Main>
        { this.loggedIn() || <Redirect to="/login" />}
      </Layout>
  }
}


export default Body;
