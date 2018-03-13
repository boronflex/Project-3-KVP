import React from "react";
import "./StatusButton.css"

class StatusButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status
    }
  }

  //possibly pass the field from the home page to state dynamically render these buttons
  //i.e application sent field is not null sent to state somehow

  //lift clicks to info block


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