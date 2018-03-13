import React from "react";
import "./StatusButton.css"

function StatusButton(props) {

    return (

      <button stage={props.stage} onClick={props.onClick} className={`center ${props.column_size} grey waves-effect waves-light btn`}>
        <p>{props.status}</p>
      </button>

    );
}

export default StatusButton;