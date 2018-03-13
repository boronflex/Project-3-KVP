import React from "react";
import "./Card.css";

function Card(props) {

  return (
    <div className={props.column_size}>
      <div className={`card ${props.color}`}>
        <div className="card-content white-text">
          <strong>
            {props.title}
          </strong>
          <br />
          <br />
          <div>{props.children}</div>
        </div>
      </div>

    </div>
  )
}

export default Card;

