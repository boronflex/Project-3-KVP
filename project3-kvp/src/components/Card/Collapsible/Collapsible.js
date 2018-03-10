import React from "react";
import "./Collapsible.css";


class Collapsible extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
    };
  }

  render() {

    const status = this.state.status;

    return (

      <ul className={`${this.state.status} collapsible ${this.props.column_size}`} data-collapsible="expandable">
        {this.props.children}
      </ul>
    )
  }

}

export default Collapsible;
