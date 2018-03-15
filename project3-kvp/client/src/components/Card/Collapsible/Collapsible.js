import React from "react";
import "./Collapsible.css";


class Collapsible extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
  }

  render() {

    return (

      <ul className={`${this.state.color} collapsible ${this.props.column_size}`} data-collapsible="expandable">
        {this.props.children}
      </ul>
    )
  }

}

export default Collapsible;
