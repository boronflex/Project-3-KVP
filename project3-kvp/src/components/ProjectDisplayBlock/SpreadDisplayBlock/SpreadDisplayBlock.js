import React from "react";
import "./SpreadDisplayBlock.css";

function SpreadDisplayBlock(props) {

  return (
    <div>

      <div className="row">

        <div className="col s6">
          Spread
      </div>

        <div className="col s6">
          Vehicle
      </div>

      </div>

      <div className="row">

        <div className="col s6">
          City
      </div>

        <div className="col s6">
          Mileage
      </div>

      </div>

      <div className="row">

        <div className="col s6">
          State
        </div>

        <div className="col s6">
          Computer
        </div>

      </div>

      <div className="row">

        <div className="col s6">
          Supervisor
        </div>

        <div className="col s6">
          Phone
        </div>

      </div>

      <div className="row">

        <div className="col s6">
          Per Diem
        </div>

        <div className="col s6">
          UTV
        </div>

      </div>


    </div>
  )
}

export default SpreadDisplayBlock;

