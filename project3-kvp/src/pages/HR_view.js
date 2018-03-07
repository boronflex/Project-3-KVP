import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
import Card from "../components/Card/Card";
import CarouselCard from "../components/Card/CarouselCard"
import Application from "../components/HrProgress/Application"

import Container from "../components/Container";


const HR_view = () =>

  <Container>

    <h2>HR View </h2>

    <div className="row">

      <CarouselCard column_size="col s4">

      </CarouselCard>

      <Card column_size="col s4" note={"application stage"}>

        <Application 
          stage={"this is the application stage"}
        />

      </Card>

    </div>

  </Container>

export default HR_view;
