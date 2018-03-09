import React from "react";
import "./CollapsibleItem.css";


class CollapsibleItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
    };
  }

  render() {

    // const children = this.props.children

    return (

      <li>
        <div className={`collapsible-header ${this.state.status} white-text`}>{this.props.collapsible_heading}</div>
        <div className={`collapsible-body ${this.state.status} white-text`}>

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
