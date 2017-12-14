import React from "react";
import "./RepoViewerTable.css";

// Import MDL React Components
import { DataTable, TableHeader } from 'react-mdl'

import PaperclipIcon from 'mdi-react/PaperclipIcon';

import copy from 'copy-to-clipboard';
const copyArrow = words => copy(words);

function processData(props) {
  const data = props.data;

  function FormatedRepo(obj) {
    this.owner       = obj.owner.login;
    this.name        = obj.name;
    this.language    = obj.language;
    this.category    = props.cat2repo[obj.repo_id];
    this.repo_id     = obj.repo_id;
    this.description = obj.description;
    this.clone_url   = <button onClick={() => copyArrow(obj.clone_url)} className="mdl-button mt v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
      <PaperclipIcon className="orange-circle" />
    </button>
  }
  return data.map(e => new FormatedRepo(e));
}

const RepoViewerTable = props =>
  <DataTable
    className="mdl-shadow--2dp center desc"
    selectable
    shadow={0}
    rowKeyColumn="repo_id"
    rows={processData(props)}
  >
    <TableHeader name="owner">Owner</TableHeader>
    <TableHeader name="name">Name</TableHeader>
    {/* <TableHeader name="description">Description</TableHeader> */}
    <TableHeader name="category">Category</TableHeader>
    <TableHeader name="language">Language</TableHeader>
    <TableHeader name="clone_url">Clone</TableHeader>
  </DataTable>

export default RepoViewerTable;
