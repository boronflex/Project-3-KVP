import React from "react";
import "./CarouselPage.css";

class CarouselPage extends React.Component {

  render(){
    
    const children = this.props.children

    return(

      <div className="carousel-item red white-text" href="anything can go here">

        {React.Children.map(children, (child, i) => {

          return child

        })}

      </div>

    );
  }
}

export default CarouselPage;
