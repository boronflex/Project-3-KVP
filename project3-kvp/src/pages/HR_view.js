import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
import Card from "../components/Card/Card";
import CardPage from "../components/Card/CardPage"
import CarouselPage from "../components/Card/CarouselPage"
import CarouselCard from "../components/Card/CarouselCard"

import Container from "../components/Container";


const HR_view = () =>

  <Container>

    <h2>HR View </h2>

    <div className="row">

      <CarouselCard column_size="col s4">

        <CarouselPage>
          <h2>First Panel</h2>
          <p>this will show an employee in progress</p>
        </CarouselPage>

        <CarouselPage>
          <h2>Second Panel</h2>
          <p>this will show an employee in progress</p>
        </CarouselPage>

        <CarouselPage>
          <h2>Third Panel</h2>
          <p>this will show an employee in progress</p>
        </CarouselPage>

      </CarouselCard>

      <div className="section col s8">

        <Card column_size="center col s4">

          <CardPage>
            <div>
              <h6>Application</h6>
              <p>not started</p>
              <button className="center waves-effect waves-light btn" >In Progress</button>
            </div>
          </CardPage>

        </Card>

        <Card column_size="center col s4">

          <CardPage>
            <div>
              <h6>Reference checks</h6>
              <p>not started</p>
              <button className="center waves-effect waves-light btn" >In Progress</button>
            </div>
          </CardPage>

        </Card>

        <Card column_size="center col s4">

          <CardPage>
            <div>
              <h6>Offer Letter & New Hire Paperwork</h6>
              <p>not started</p>
              <button className="center waves-effect waves-light btn" >In Progress</button>
            </div>
          </CardPage>

        </Card>

        <Card column_size="center col s4">

          <CardPage>
            <div>
              <h6>Drug Test</h6>
              <p>not started</p>
              <button className="center waves-effect waves-light btn" >In Progress</button>
            </div>
          </CardPage>

        </Card>

        <Card column_size="center col s4">

          <CardPage>
            <div>
              <h6>Fitness Test</h6>
              <p>not started</p>
              <button className="center waves-effect waves-light btn" >In Progress</button>
            </div>
          </CardPage>

        </Card>

      </div>

    </div>

  </Container>

export default HR_view;
