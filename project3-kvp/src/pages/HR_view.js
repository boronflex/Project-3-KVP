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

  }

  render() {

    return (

      <Container>

        <h2>Requests for Hire</h2>

        {this.state.candidates
          .filter(candidate => candidate.in_hiring_process === true)
          .map(candidate => {

          return (

            <InfoBlock key={candidate.id} candidate_info={candidate}/>

          );

        })}

      </Container >
    )
  }
}

export default HR_view;
