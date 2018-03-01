import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
import ProspectList from "../components/Prospects/ProspectList";

import Container from "../components/Container";
import ProspectSearch from "../components/Prospects/ProspectSearch";


const Search_Select = () =>

  <Container>

    <h1>Applicants</h1>

    <ProspectSearch />

    <ProspectList />

  </Container>

export default Search_Select;
