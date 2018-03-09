import React from "react";
import "./StatusButton.css"

function StatusButton(props) {
  return (
    <button className="center waves-effect waves-light btn" onClick={props.onClick}>
      progress
    </button>
  );
}

export default StatusButton;