import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";

import Card from "../components/Card";
import Container from "../components/Container";

import NewProspect from "../components/Inputs/ProspectInput";
import NewProject from "../components/Inputs/ProjectInput";
import NewSpread from "../components/Inputs/SpreadInput";

const Inputs = () =>

  <Container>

    <h2>Inputs Dashboard</h2>

    <div className="row">

      <div className="col s12">

        <Card column_size="col s12" title="New Prospect">
          <NewProspect />
        </Card>

        <Card column_size="col s4" title="New Project">
          <NewProject />
        </Card>

        <Card column_size="col s8" title="New Spread">
          <NewSpread />
        </Card>

      </div>

    </div>

  </Container>

export default Inputs;
