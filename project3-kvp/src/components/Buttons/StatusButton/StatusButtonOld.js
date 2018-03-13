import React from "react";
import "./StatusButton.css"

class StatusButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleinProgressClick = this.handleInProgressClick.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
    this.state = {
      status:"start"
    }
  }

  //possibly pass the field from the home page to state dynamically render these buttons
  //i.e application sent field is not null sent to state somehow

  //lift clicks to info block

  handleInProgressClick() {
    this.setState({status:"in progress"});
  }

  handleCompleteClick() {
    this.setState({status:"complete"});
  }

  render() {
    
    const buttonStatus = this.state.status;

    let button = null;
    if (buttonStatus === "start") {
      button = <StartButton onClick={this.handleinProgressClick} />;
    } else if (buttonStatus === "in progress") {
      button = <ProgressButton onClick={this.handleCompleteClick} />;
    } else {
      button = <CompleteButton />;
    }

    return (
      <div>
        {button}
      </div>
    );
  }
}

function StartButton(props) {
  return (
    <button className="center red waves-effect waves-light btn" onClick={props.onClick}>
      start
    </button>
  );
}

function ProgressButton(props) {
  return (
    <button className="center amber waves-effect waves-light btn" onClick={props.onClick}>
      In Progress
    </button>
  );
}

function CompleteButton(props) {
  return (
    <button className="center green waves-effect waves-light btn" >
      Complete
    </button>
  );
}


export default StatusButton;