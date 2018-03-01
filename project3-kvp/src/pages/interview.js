import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
import Card from "../components/Card/Card";
import CarouselCard from "../components/Card/CarouselCard";
import Container from "../components/Container";

import OfferData from "../components/Inputs/OfferData";

const Interview = () =>

  <Container>

    <h2>Interview Dashboard</h2>

    <div className="row">

      <div className="section col s4">

        <CarouselCard column_size="col s12">
        </CarouselCard>

        <Card column_size="col s12" title="Project Info">
          <p>this will show the info about the project and spread</p>
        </Card>

      </div>


      <Card column_size="col s4" title="Offer Data">
        <OfferData />
      </Card>

      <div className="section col s4">

        <Card column_size="col s12" title="HR Update">
          <p>this will update based on hr's application progress</p>
        </Card>

      </div>

    </div>

  </Container>

export default Interview;
