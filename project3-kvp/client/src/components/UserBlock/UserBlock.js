import React from "react";
import "./UserBlock.css";

import Collapsible from '../Card/Collapsible/Collapsible'
import CollapsibleItem from '../Card/Collapsible/CollapsibleItem/CollapsibleItem'

function UserBlock(props) {

  return (
    <div className={props.column_size}>
      <Collapsible column_size={"center col s12 m3 offset-m2 l2 offset-l4"} >
        <CollapsibleItem collapsible_heading={props.user_name} position="center">
          <button className="grey waves-effect waves-light btn">Logout</button>
        </CollapsibleItem>
      </Collapsible>
    </div>
  )
}

export default UserBlock;

