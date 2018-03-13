import React from "react";
import "./CardPage.css";

class CardPage extends React.Component {

//this doesnt need state-change to functional component

  render(){
    
    const children = this.props.children

    return(

      <div>

        <p>{this.props.status}</p>
        
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
