import React from "react";
import "./SortableTable.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SortableTable = props =>

  <div>

    <h6>this table will live update from search</h6>

    <table className="bordered highlight">
      <thead>
        <tr>
            <th>Name</th>
            <th>Item Name</th>
            <th>Item Price</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Alvin</td>
          <td>Eclair</td>
          <td>$0.87</td>
        </tr>
        <tr>
          <td>Alan</td>
          <td>Jellybean</td>
          <td>$3.76</td>
        </tr>
        <tr>
          <td>Jonathan</td>
          <td>Lollipop</td>
          <td>$7.00</td>
        </tr>
      </tbody>

    </table>

  </div>;

export default SortableTable;
