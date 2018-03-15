import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";

import SelectableTable from "../components/Table/SelectableTable";

import UserBlock from '../components/UserBlock/UserBlock';

import Container from "../components/Container";

const Search_Select = () =>

  <Container>

    <div className="row">

      <h3 className="col s12 m7 l6">Search and Select Candidates</h3>

      <UserBlock user_name="Kyle Palmer" />

    </div>

    <SelectableTable />

  </Container>

export default Search_Select;
