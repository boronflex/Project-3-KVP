import React from "react";
import "./CollapsibleItem.css";


class CollapsibleItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
  }

  render() {

    // const children = this.props.children

    return (

      <li>
        <div className={`collapsible-header ${this.state.color} ${this.props.text}`}>
          <p className={`col s12 ${this.props.position}`}>
            {this.props.collapsible_heading}
          </p>
        </div>
        <div className={`collapsible-body ${this.state.color} ${this.props.text}`}>

          {this.props.children}
        
        </div>
      </li>

    )
  }

}

export default CollapsibleItem;
