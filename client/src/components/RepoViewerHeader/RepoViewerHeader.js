import React from "react";
import "./RepoViewerHeader.css";
import { Header as HeaderMDL, IconButton, Menu, MenuItem, HeaderRow,
         Textfield } from 'react-mdl'

const RepoViewerHeader = props =>
  <HeaderMDL>
    <HeaderRow className="repo-header">
      <span className="mdl-layout-title pl-80px">Saved</span>
    </HeaderRow>
  </HeaderMDL>

export default RepoViewerHeader;
