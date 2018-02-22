import React from "react";
import "./Card.css";

const Card = props =>

  
  <div className="col s12">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Card Title</span>
        <div>{props.children}</div>
      </div>
      <div className="card-action">
        <a href="">scroll button?</a>
        <a href="">scroll button?</a>
      </div>
    </div>

  </div>;

export default Card;

