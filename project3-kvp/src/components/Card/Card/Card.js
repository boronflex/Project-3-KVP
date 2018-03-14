import React from "react";
import "./Card.css";

function Card(props) {

  return (
    <div className={props.column_size}>
      <div className={`card-panel section ${props.color}`}>
        <div className="white-text">
          <strong>
            {props.title}
          </strong>
          <div>{props.children}</div>
        </div>
      </div>

    </div>
  )
}

export default Card;

