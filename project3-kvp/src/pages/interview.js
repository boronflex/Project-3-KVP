import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
import Card from "../components/Card";

const Interview = () =>
  <div>
    {/* <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Pupster!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12"> */}
          <h1>Interview </h1>

          <div className="row">

            <Card note={"you'll need to change this to pull employee info"}/>

            <Card note={"this will have offer parameters"}/>

          </div>

          <div className="row">

            <Card note={"this will show hr stage"}/>

          </div>
           
          <p>
            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum
            porttitor. Sed malesuada molestie velit ac viverra. Quisque a
            ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. Nulla
            tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta
            accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum
            egestas. Aliquam blandit mi eu urna scelerisque, vitae volutpat
            ligula ultricies. Maecenas vel porta augue. Fusce mauris ex,
            dignissim et lacinia ut, tempus eget nibh.
          </p>
        {/* </Col>
      </Row>
    </Container> */}
  </div>;

export default Interview;
