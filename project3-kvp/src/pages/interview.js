import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
import Card from "../components/Card";
import Container from "../components/Container";

import OfferData from "../components/Inputs/OfferData";

const Interview = () =>

  <Container>

    <h2>Interview Dashboard</h2>

    <div className="row">

      <div className="section col s4">

        <Card column_size="col s12" title="New Prospect">
        </Card>

        <Card column_size="col s12" title="Project Info">
        </Card>

      </div>


      <Card column_size="col s4" title="Offer Data">
        <OfferData />
      </Card>

      <div className="section col s4">

        <Card column_size="col s12" title="HR Update">
        </Card>

      </div>

    </div>

  </Container>

export default Interview;
