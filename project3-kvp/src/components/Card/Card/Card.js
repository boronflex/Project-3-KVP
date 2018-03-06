import React from "react";
import "./Card.css";

const Card = props => 
  
  <div className={props.column_size}>
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{props.title}</span>
        <div>{props.children}</div>
      </div>
      {/* <div className="card-action">
        <a href="">scroll button?</a>
        <a href="">scroll button?</a>
      </div> */}
    </div>

  </div>;

export default Card;

