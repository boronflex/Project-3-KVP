import React from "react";
import "./StatusButton.css"

function StatusButton(props) {

    return (

      <button className={`center ${props.column_size} grey waves-effect waves-light btn`}>
        <p>{props.status}</p>
      </button>

    );
}

export default StatusButton;