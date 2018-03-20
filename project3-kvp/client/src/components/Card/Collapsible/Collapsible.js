import React from "react";
import "./Collapsible.css";
import { Collapsible } from 'react-materialize'


class CollapsibleComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
  }

  render() {

    return (

      <Collapsible
        className={`${this.state.color} collapsible ${this.props.column_size}`} data-collapsible="expandable">
        {this.props.children}
      </Collapsible>
    )
  }

}

export default CollapsibleComponent;
