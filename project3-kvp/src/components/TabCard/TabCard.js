import React from "react";
import "./TabCard.css";

const TabCard = props =>


  <div className="col s6 m4">
    <div className="card small">
      <div className="card-content">
        <p>{props.note}</p>
      </div>
      <div className="card-tabs">
        <ul className="tabs tabs-fixed-width">
          <li className="tab"><a href="#test4">Offer Letter</a></li>
          <li className="tab"><a className="active" href="#test5">Drug Test</a></li>
          <li className="tab"><a href="#test6">Fitness Test</a></li>
        </ul>
      </div>
      <div className="card-content grey lighten-4">
        <div id="test4">Test 1</div>
        <div id="test5">Test 2</div>
        <div id="test6">Test 3</div>
      </div>
    </div>
  </div>;

export default TabCard;

