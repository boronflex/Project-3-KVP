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
        <div className={`collapsible-header ${this.state.color} white-text`}>{this.props.collapsible_heading}</div>
        <div className={`collapsible-body ${this.state.color} white-text`}>

          {this.props.children}
        
          {/* {React.Children.map(children, (child, i) => {

            return child

          })} */}

        </div>
      </li>

    )
  }

}

export default CollapsibleItem;
