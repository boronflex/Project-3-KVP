import React from "react";
import "./CardPage.css";

function CardPage(props) {

  const children = props.children

  return (

    <div>

      <p>{props.status}</p>

      {React.Children.map(children, (child, i) => {

        return (
          child
        )

      })}

    </div>

  );
}

export default CardPage;
