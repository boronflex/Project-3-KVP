import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
import Container from "../components/Container";

import UserBlock from '../components/UserBlock/UserBlock';

import SelectableTable from "../components/Table/SelectableTable";

const Overview = () =>

  <Container>

    <div className="row">

      <h3 className="col s12 m7 l6">Overview</h3>

      <UserBlock user_name="Kyle Palmer" />

    </div>

    <SelectableTable />

  </Container>

export default Overview;
