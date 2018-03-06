import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
import Card from "../components/Card/Card";
import CarouselCard from "../components/Card/CarouselCard";
import Container from "../components/Container";

import OfferData from "../components/Inputs/OfferData";
import NoOffer from "../components/Inputs/NoOffer";

const Interview = () =>

  <Container>

    <h2>Interview Dashboard</h2>

    <div className="row">

      <div className="col s3">
        <CarouselCard column_size="">
        </CarouselCard>
      </div>

      <Card column_size="col s6" title="Offer Data">
        <OfferData />
      </Card>

      <Card column_size="col s3" title="No Offer">
        <NoOffer />
      </Card>

    </div>

    <div className="row">

      <Card column_size="col s6" title="Project Info">
        <p>this will show the info about the project and spread</p>
      </Card>

      <Card column_size="col s6" title="HR Update">
        <p>this will update based on hr's application progress</p>
      </Card>

    </div>


  </Container>

export default Interview;
