import React             from "react";
import { Switch, Route } from "react-router-dom";
import "./RepoViewer.css";

// Import MDL React Components
import { Layout } from 'react-mdl'

// Import Project Components
import RepoViewerDrawer from "../RepoViewerDrawer";
import RepoViewerHeader from "../RepoViewerHeader";
import Main from "../Main";
import RepoViewerTable from "../RepoViewerTable";

import PaperclipIcon from 'mdi-react/PaperclipIcon';

const RepoViewer = props =>
  <Layout fixedDrawer={true} fixedHeader={true} className="w-100">
    <RepoViewerHeader />
    <RepoViewerDrawer />
    
    <Main>
      <RepoViewerTable />
      {/* <Switch>
        <Route exact path="/" component={SearchForm} />
        <Route path="/search" component={Results} />
        <Route path="/saved"  component={RepoViewer} />
      </Switch> */}
    </Main>
  </Layout>

export default RepoViewer;
