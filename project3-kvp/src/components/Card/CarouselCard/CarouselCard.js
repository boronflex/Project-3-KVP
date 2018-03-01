import React from "react";
import "./CarouselCard.css";

class CarouselCard extends React.Component { 

  // componentDidMount() {
  //   this.$el = $(this.el);
  //   this.$el.somePlugin();
  // }

  // componentWillUnmount() {
  //   this.$el.somePlugin('destroy');
  // }

  render(){

    return (

      <div className="">
        
        <div className="carousel carousel-slider center" data-indicators="true">
        <div className="carousel-fixed-item center">
          <a className="btn waves-effect white grey-text darken-text-2">button</a>
        </div>
        <div className="carousel-item red white-text" href="#one!">
          <h2>First Panel</h2>
          <p className="white-text">This is your first panel</p>
        </div>
        <div className="carousel-item amber white-text" href="#two!">
          <h2>Second Panel</h2>
          <p className="white-text">This is your second panel</p>
        </div>
        <div className="carousel-item green white-text" href="#three!">
          <h2>Third Panel</h2>
          <p class="white-text">This is your third panel</p>
        </div>
        <div className="carousel-item blue white-text" href="#four!">
          <h2>Fourth Panel</h2>
          <p className="white-text">This is your fourth panel</p>
        </div>
        </div>

      </div>

    )
  }

}

export default CarouselCard;

