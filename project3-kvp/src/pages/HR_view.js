import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
import Card from "../components/Card/Card";
import CardPage from "../components/Card/CardPage"
import CarouselPage from "../components/Card/CarouselPage"
import CarouselCard from "../components/Card/CarouselCard"

import Container from "../components/Container";

import testData from '../components/SampleData/prospects';

function getData() {
  const data = testData.map((item) => {
    return {
      ...item
    }
  })
  return data;
}

console.log(getData());


class HR_view extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      candidates: getData(),
      current: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

    const target = event.target;
    const value = target.value;

    console.log("this is the current card: " + value)

    this.setState({
      current: value
    })

  }

  render() {

    return (

      <Container>

        <h2>HR View </h2>

        <div className="row">

          <CarouselCard column_size="col s3">

            {this.state.candidates.map(candidate => {

              return (

                <CarouselPage key={candidate.id} value={candidate.id} onChange={this.handleChange}>

                  <form>
                    <h2>
                      {candidate.first_name + " " + candidate.last_name}
                    </h2>
                    <p className="center col s12">"{candidate.nick_name}"</p>

                    <div className="section col s6">
                      <div className="col s12">
                        <p className="center">phone 1:</p>
                        <p className="center">{candidate.phone_1}</p>
                      </div>
                    </div>
                    <div className="section col s6">
                      <div className="col s12">
                        <p className="center">phone 2:</p>
                        <p className="center">{candidate.phone_2}</p>
                      </div>
                    </div>
                    <div className="section col s12">
                      <div className="col s12">
                        <p className="center">address:</p>
                        <p className="center">{candidate.address_st + " " + candidate.city + " " + candidate.address_state + " " + candidate.zip}</p>
                      </div>
                    </div>
                    <div className="section col s12">
                      <div className="col s12">
                        <p className="center">email:</p>
                        <p className="center">{candidate.email}</p>
                      </div>
                    </div>
                  </form>

                </CarouselPage>

              );

            })}

          </CarouselCard>

          <Card column_size="col s2">
            <h6 className="center">Offer Details</h6>
            <div className="center">
              <p>requested by:</p>
              <p>title:</p>
              <p>pay:</p>
              <p>requested start date:</p>
              <p>project number:</p>
            </div>
          </Card>

          <div className="section col s7">

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
    )
  }
}

export default HR_view;
