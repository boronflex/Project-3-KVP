import React from "react";
import "./StatusButton.css"

class StatusButton extends React.Component {

//this doesnt need state-change to functional component

  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status
    }
  }

  render() {

    const buttonStatus = this.state.status;

    return (
      <button className="center grey waves-effect waves-light btn">
        {buttonStatus}
      </button>
    );
  }
}


export default StatusButton;