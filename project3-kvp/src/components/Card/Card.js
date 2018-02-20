import React from "react";
import NewProspect from "../Inputs";
import "./Card.css";

const Card = props =>

  <div className="row">
  <div className="col s12 m6">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Card Title</span>
        <p>you'll put the prospect in this card, this is just proof of concept</p>
        <p>{props.note}</p>
        <NewProspect />
      </div>
      <div className="card-action">
        <a href="">scroll button?</a>
        <a href="">scroll button?</a>
      </div>
    </div>
  </div>
  </div>;

export default Card;

