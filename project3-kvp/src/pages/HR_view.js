import React from "react";

import Container from "../components/Container";

import InfoBlock from '../components/InfoBlock/InfoBlock';

import testData from '../components/SampleData/hr_sampledata';

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

    // this.handleChange = this.handleChange.bind(this);
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

        {/* <input onChange={this.changeHandler} value="this is a value" /> */}

        {this.state.candidates
          .filter(candidate => candidate.in_hiring_process === true)
          .map(candidate => {

          return (

            <InfoBlock key={candidate.id} candidate_info={candidate}/>

          );

        })}

        <div className="section col s7">

        </div>

      </Container >
    )
  }
}

export default HR_view;
