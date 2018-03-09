import React from "react";
import "./Card.css";


class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
    };
  }

  render() {

    return (
      <div className={this.props.column_size}>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.title}</span>
            <div>{this.props.children}</div>
          </div>
        </div>

      </div>
    )
  }

}

export default Card;

