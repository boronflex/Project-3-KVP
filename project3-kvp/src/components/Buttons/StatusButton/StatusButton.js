import React from "react";
import "./StatusButton.css"

function StatusButton(props) {

    return (

      <button 
        stage={props.stage} 
        onClick={props.onClick} 
        className={`center bottom ${props.column_size} grey waves-effect waves-light btn`}
      >
        {props.status}
      </button>

    );
}

export default StatusButton;