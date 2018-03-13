import React from "react";
import "./StatusButton.css"

function StatusButton(props) {

    return (

      <button className="center grey waves-effect waves-light btn">
        {props.status}
      </button>
      
    );
}

export default StatusButton;