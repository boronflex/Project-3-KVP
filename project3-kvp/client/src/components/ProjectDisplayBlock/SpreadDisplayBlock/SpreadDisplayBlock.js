import React from "react";
import "./SpreadDisplayBlock.css";

function SpreadDisplayBlock(props) {

  function showYesNo(field) {
    if (field){
      return "Yes"
    } else if (!field) {
      return "No"
    } else {
      return "dont know"
    }
  }

  return (

    <div>

      <div className="row">

        <div className="col s6">
          <p>Spread#:</p> 
          <p>{props.projects.spread_num}</p>
      </div>

        <div className="col s6">
          <p>Vehicle:</p>
          <p>{showYesNo(props.projects.vehicle)}</p>
      </div>

      </div>

      <div className="row">

        <div className="col s6">
          <p>City</p>
          <p>{props.projects.spread_city}</p>
      </div>

        <div className="col s6">
          <p>Mileage</p>
          <p>{props.projects.mileage}</p>
      </div>

      </div>

      <div className="row">

        <div className="col s6">
          <p>State</p>
          <p>{props.projects.spread_state}</p>
        </div>

        <div className="col s6">
          <p>Computer</p>
          <p>{showYesNo(props.projects.computer)}</p>
        </div>

      </div>

      <div className="row">

        <div className="col s6">
          <p>Supervisor</p>
          <p>{props.projects.supervisor_name}</p>
        </div>

        <div className="col s6">
          <p>Phone</p>
          <p>{showYesNo(props.projects.phone)}</p>
        </div>

      </div>

      <div className="row">

        <div className="col s6">
          <p>Per Diem</p>
          <p>{props.projects.per_diem}</p>
        </div>

        <div className="col s6">
          <p>UTV</p>
          <p>{showYesNo(props.projects.utv)}</p>
        </div>

      </div>


    </div>
  )
}

export default SpreadDisplayBlock;

