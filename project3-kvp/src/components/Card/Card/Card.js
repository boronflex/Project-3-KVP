import React from "react";
import "./Card.css";


class Card extends React.Component {

//this doesnt need state-change to functional component

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
  }

  render() {

    return (
      <div className={this.props.column_size}>
        <div className={`card ${this.state.color}`}>
          <div className="card-content white-text">
            <strong>
              {this.props.title}
            </strong>
            <br/>
            <br/>
            <div>{this.props.children}</div>
          </div>
        </div>

      </div>
    )
  }

}

export default Card;

