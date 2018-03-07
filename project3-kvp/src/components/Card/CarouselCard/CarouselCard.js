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

  render(){

    return (

      <div className={this.state.column_size}>
        
        <div className="carousel carousel-slider center" data-indicators="true">

          {/* <div className="carousel-fixed-item center">
            <a className="btn waves-effect white grey-text darken-text-2">button</a>
          </div> */}

          <div className="carousel-item red white-text" href="#one!">
            <h2>First Panel</h2>
            <p className="white-text">This will show selected employee data</p>
            <p>{this.props.children}</p>
          </div>

          <div className="carousel-item amber white-text" href="#two!">
            <h2>Second Panel</h2>
            <p className="white-text">This is your second panel</p>
          </div>

        </div>

      </div>

    )
  }

}

export default CarouselCard;

