import React from 'react'
import Slider from '../../../../node_modules/react-slick/lib/slider'

class SimpleSlider extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>{this.props.children}</div>
      </Slider>
    );
  }
}

export default SimpleSlider;
