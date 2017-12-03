import React             from "react";
import { Switch, Route } from "react-router-dom";
import "./RepoViewerTable.css";

// Import MDL React Components
import { Layout } from 'react-mdl'

// Import Project Components
import RepoViewerDrawer from "../RepoViewerDrawer";
import RepoViewerHeader from "../RepoViewerHeader";
import Main from "../Main";

import PaperclipIcon from 'mdi-react/PaperclipIcon';

import copy from 'copy-to-clipboard';
const copyArrow = words => copy(words);

const RepoViewerTable = props =>
      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp center">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Owner</th>
            <th className="mdl-data-table__cell--non-numeric">Name</th>
            <th className="mdl-data-table__cell--non-numeric">Description</th>
            <th className="mdl-data-table__cell--non-numeric">Category</th>
            <th className="mdl-data-table__cell--non-numeric">Language</th>
            <th className="mdl-data-table__cell--non-numeric">Clone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Facebook</td>
            <td className="mdl-data-table__cell--non-numeric">React</td>
            <td className="mdl-data-table__cell--non-numeric">A declarative, efficient and flexible javascript library for building user interfaces.</td>
            <td className="mdl-data-table__cell--non-numeric">Framework</td>
            <td className="mdl-data-table__cell--non-numeric">JS</td>
            <td className="mdl-data-table__cell--non-numeric">
              <button onClick={() => copyArrow("ASDS")} className="mdl-button mt v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
                <PaperclipIcon className="orange-circle" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Facebook</td>
            <td className="mdl-data-table__cell--non-numeric">React</td>
            <td className="mdl-data-table__cell--non-numeric">A declarative, efficient and flexible javascript library for building user interfaces.</td>
            <td className="mdl-data-table__cell--non-numeric">Framework</td>
            <td className="mdl-data-table__cell--non-numeric">JS</td>
            <td className="mdl-data-table__cell--non-numeric">
              <button onClick={() => copyArrow("ASDS")} className="mdl-button mt v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
                <PaperclipIcon className="orange-circle" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Facebook</td>
            <td className="mdl-data-table__cell--non-numeric">React</td>
            <td className="mdl-data-table__cell--non-numeric">A declarative, efficient and flexible javascript library for building user interfaces.</td>
            <td className="mdl-data-table__cell--non-numeric">Framework</td>
            <td className="mdl-data-table__cell--non-numeric">JS</td>
            <td className="mdl-data-table__cell--non-numeric">
              <button onClick={() => copyArrow("ASDS")} className="mdl-button mt v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
                <PaperclipIcon className="orange-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

export default RepoViewerTable;
