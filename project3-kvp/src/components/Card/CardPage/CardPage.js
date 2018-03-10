import React from "react";
import "./CardPage.css";

class CardPage extends React.Component {

  render(){
    
    const children = this.props.children

    return(

      <div>
        
        {React.Children.map(children, (child, i) => {

          return (
            child
          )

        })}

      </div>

    );
  }
}

export default CardPage;
