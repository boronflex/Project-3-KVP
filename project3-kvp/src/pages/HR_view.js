import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
import Card from "../components/Card/Card";
import CardPage from "../components/Card/CardPage"
import CarouselPage from "../components/Card/CarouselPage"
import CarouselCard from "../components/Card/CarouselCard"

import SlickCarousel from "../components/Card/SlickCarousel"

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

//console.log(getData());


class HR_view extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      candidates: getData()
    }

    this.changeHandler = this.changeHandler.bind(this)

    // this.handleChange = this.handleChange.bind(this);
  }

  changeHandler(e) {
    const target = e.target;
    const value = target.value;
    console.log("event fired: " + value);
  }

  // handleChange(event) {

  //   const target = event.target;
  //   const value = target.value;

  //   console.log("this is the current card: ")

  //   this.setState({
  //     current: value
  //   })

  // }

  render() {

    return (

      <Container>

        <h2>HR View </h2>

        <div className="row">

          <CarouselCard column_size="col s3">

            {/* <input onChange={this.changeHandler} value="this is a value" /> */}

            {this.state.candidates.map(candidate => {

              return (

                <CarouselPage key={candidate.id}>

                  <h2 value={candidate.id} onClick={this.changeHandler}>
                    {candidate.first_name + " " + candidate.last_name}
                  </h2>
                  <p className="col s12">"{candidate.nick_name}"</p>

                  <div className="section col s6">
                    <div className="col s12">
                      <p>phone 1:</p>
                      <p>{candidate.phone_1}</p>
                    </div>
                  </div>
                  <div className="section col s6">
                    <div className="col s12">
                      <p>phone 2:</p>
                      <p>{candidate.phone_2}</p>
                    </div>
                  </div>
                  <div className="section col s12">
                    <div className="col s12">
                      <p>address:</p>
                      <p>{candidate.address_st + " " + candidate.city + " " + candidate.address_state + " " + candidate.zip}</p>
                    </div>
                  </div>
                  <div className="section col s12">
                    <div className="col s12">
                      <p>email:</p>
                      <p>{candidate.email}</p>
                    </div>
                  </div>

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
