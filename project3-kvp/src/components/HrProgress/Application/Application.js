import React from "react";
import "./Application.css";

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stage: props.stage,
      user: 'this will show the user on the current task',
      started: false,
      finished: false
    };
  }


  render() {

    return (
      <div>

        <p>{this.state.stage}</p>

        <br />
        <br />

        <p>{this.state.user}</p>

        <br />
        <br />
        <br />

        <div className="row">

          <div className="col s12">

            <button className="center waves-effect waves-light btn" >In Progress</button>

            {/* <button className="waves-effect waves-light btn right" >Complete</button> */}

          </div>

        </div>

      </div>
    )

  }


}

export default Application;

