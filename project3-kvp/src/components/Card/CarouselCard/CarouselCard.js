import React from "react";
import "./CarouselCard.css";


class CarouselCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      column_size: props.column_size
    };
  }

  // will have to break this out to grab selected employees per user
  // and dynamically creates cards from database

  // componentDidMount() {
  //   this.$el = $(this.el);
  //   this.$el.somePlugin();
  // }

  // componentWillUnmount() {
  //   this.$el.somePlugin('destroy');
  // }

  render() {

    return (

      <div className={this.state.column_size}>

        <div className="carousel carousel-slider center" data-indicators="true">

          <div>{this.props.children}</div>

        </div>

      </div>

    )
  }

}

export default CarouselCard;

