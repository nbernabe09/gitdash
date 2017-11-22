import React from "react";
import "./ContainerCard.css";

const ContainerCard = props =>
  <div id={props.title} className="mdl-grid">
    <div className="mdl-cell mdl-cell--12-col demo-card-wide mdl-card mdl-shadow--4dp">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{props.title}</h2>
      </div>
      <div className="mdl-card__media">
        <img border="0" alt="" />
      </div>
      <div className="mdl-grid nyr-copy">
        {props.children}
      </div>
    </div>
  </div>

export default ContainerCard;
