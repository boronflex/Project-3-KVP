import React from "react";
import "./CarouselPage.css";

function CarouselPage(props) {
    
  //const children = props.children

  return(

    <div className="carousel-item red white-text" href="nothing is here">

      <div>{props.children}</div>


      {/* {React.Children.map(children, (child, i) => {

        return child

      })} */}


    </div>

  );
}

export default CarouselPage;
