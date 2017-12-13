import React from "react";
import { Switch, Route } from "react-router-dom";
import "./RepoViewerTable.css";

// Import MDL React Components
import { Layout, DataTable, TableHeader } from 'react-mdl'

// Import Project Components
import RepoViewerDrawer from "../RepoViewerDrawer";
import RepoViewerHeader from "../RepoViewerHeader";
import Main from "../Main";

import PaperclipIcon from 'mdi-react/PaperclipIcon';

import copy from 'copy-to-clipboard';
const copyArrow = words => copy(words);

const genRow = (obj, props) => {
  return <tr>
    <td className="mdl-data-table__cell--non-numeric">{obj.owner.login}</td>
    <td className="mdl-data-table__cell--non-numeric">{obj.name}</td>
    {/* <td className="mdl-data-table__cell--non-numeric">{obj.description}</td> */}
    <td className="mdl-data-table__cell--non-numeric">Framework</td>
    <td className="mdl-data-table__cell--non-numeric">{obj.language}</td>
    <td className="mdl-data-table__cell--non-numeric">
      <button onClick={() => copyArrow(obj.clone_url)} className="mdl-button mt v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
        <PaperclipIcon className="orange-circle" />
      </button>
    </td>
  </tr>
}

let data = [
  {
    owner: "Facebook",
    name: "React",
    description: "A declarative, efficient and flexible javascript library for building user interfaces.",
    repo_id: 1,
    language: "HTML",
    clone_url: "https://github.com/ALMaclaine/gitdash"
  },
  {
    owner: "Facebook",
    name: "React",
    description: "A declarative, efficient and flexible javascript library for building user interfaces.",
    repo_id: 2,
    language: "HTML",
    clone_url: "https://github.com/ALMaclaine/gitdash"
  },
  {
    owner: "Facebook",
    name: "React",
    description: "A declarative, efficient and flexible javascript library for building user interfaces.",
    repo_id: 3,
    language: "HTML",
    clone_url: "https://github.com/ALMaclaine/gitdash"
  },
  {
    owner: "Facebook",
    name: "React",
    description: "A declarative, efficient and flexible javascript library for building user interfaces.",
    repo_id: 4,
    language: "HTML",
    clone_url: <button onClick={() => copyArrow("The info")} className="mdl-button mt v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
      <PaperclipIcon className="orange-circle" />
    </button>
  }
]

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
