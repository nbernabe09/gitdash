import React from "react";
import "./NewsCard.css";

const NewsCard = props =>
  <div className="mdl-cell demo-card-wide mdl-card mdl-shadow--4dp nyr-card">
    <div className="mdl-card__title">
      <h2 className="mdl-card__title-text">{props.headline}</h2>
    </div>
    <div className="mdl-card__supporting-text">
      {props.summary}
    </div>
    <div className="mdl-card__actions flex mdl-card--border">
      <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href={props.url}>Read more</a>
      <div className="mdl-layout-spacer"></div>
      <button onClick={() => props.saveHandler(props)} className="mdl-button mt sml mdl-js-button mdl-button--fab mdl-button--colored" >
        <i className="material-icons">star_rate</i>
      </button>
    </div>
  </div>

export default NewsCard;
