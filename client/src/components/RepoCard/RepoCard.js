import React from "react";
import "./RepoCard.css";
import copy from 'copy-to-clipboard';

/* Icon Imports */
import CloudDownloadIcon from 'mdi-react/CloudDownloadIcon';
import PaperclipIcon from 'mdi-react/PaperclipIcon';

const copyArrow  = words => copy(words);
const formatDate = date  => `${date.getMonth()}-${date.getDay()}-${date.getFullYear()}`

const RepoCard = props =>
  <div data-repo-id={props.repoObj.repo_id} className="mdl-cell dash-card-wide mdl-card mdl-shadow--4dp nyr-card">
    <div className="repo-row flex">
      <div data-owner-id={props.repoObj.owner.owner_id} className="avatar-box flex flex-column">
        <a href={props.repoObj.owner.html_url}>
          <img src={props.repoObj.owner.avatar_url} alt="user-avatar" className="dash-avatar" />
          <span className="avatar-name">{props.repoObj.owner.login}</span>
        </a>
      </div>
      <div className="name-desc-box">
        <div className="mdl-card__title padding-1 no-flex">
          <a href={props.repoObj.html_url}>
            <h2 className="mdl-card__title-text">{props.repoObj.name}</h2>
          </a>
        </div>
        <div>
          <p className="mdl-card__supporting-text">{props.repoObj.description.replace("\n", " ")}</p>
        </div>
      </div>
      <button className="mdl-button sml mdl-button--fab code-tag" disabled>
        {props.repoObj.language}
      </button>
    </div>
    <div className="mdl-card__actions flex mdl-card--border padding-1">
      <span>Updated: {formatDate(new Date(props.repoObj.updated_at))}</span>
      <div className="mdl-layout-spacer"></div>
      <button className="mdl-button mr v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
        <CloudDownloadIcon  className="orange-circle"/>
      </button>
      <button onClick={() => copyArrow(props.repoObj.clone_url)} className="mdl-button mr v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
        <PaperclipIcon className="orange-circle" />
      </button>
      <span className="mr">Forks: {props.repoObj.forks}</span>
      <span className="mr">Watches: {props.repoObj.watchers_count}</span>
      <span className="mr">Stars: {props.repoObj.stargazers_count}</span>
      <span className="mr">Issues: {props.repoObj.open_issues}</span>
    </div>
  </div>

export default RepoCard;
