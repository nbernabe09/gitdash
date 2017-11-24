import React from "react";
import "./RepoCard.css";

/* Icon Imports */
import CloudDownloadIcon from 'mdi-react/CloudDownloadIcon';
import PaperclipIcon from 'mdi-react/PaperclipIcon';

const RepoCard = props =>
  <div className="mdl-cell dash-card-wide mdl-card mdl-shadow--4dp nyr-card">
    <div className="repo-row flex">
      <div className="avatar-box flex flex-column">
        <img src="images/user.jpg" alt="user-avatar" className="dash-avatar" />
        <span className="avatar-name">Facebook</span>
      </div>
      <div className="name-desc-box">
        <div className="mdl-card__title padding-1 no-flex">
          <h2 className="mdl-card__title-text">React</h2>
        </div>
        <div className="mdl-card__supporting-text">
          A declarative, efficient, and flexible JavaScript library for building user interfaces.
        </div>
      </div>
      <button className="mdl-button sml mdl-button--fab code-tag" disabled>
        HTML
      </button>
    </div>
    <div className="mdl-card__actions flex mdl-card--border padding-1">
      <span>Updated: 12/21/2021</span>
      <div className="mdl-layout-spacer"></div>
      <button className="mdl-button mr v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
        <CloudDownloadIcon  className="orange-circle"/>
      </button>
      <button className="mdl-button mr v-sml mdl-js-button mdl-button--fab mdl-button--colored" >
        <PaperclipIcon className="orange-circle" />
      </button>
      <span className="mr">Forks: 100</span>
      <span className="mr">Watches: 1021</span>
      <span className="mr">Stars: 777</span>
      <span className="mr">Issues: 32</span>
    </div>
  </div>

export default RepoCard;
