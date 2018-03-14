import React from "react";

import Container from "../components/Container";

import UserBlock from '../components/UserBlock/UserBlock'
import InterviewBlock from '../components/InfoBlock/InterviewBlock/InterviewBlock'

import testData from '../components/SampleData/hr_sampledata';

function getData() {
  const data = testData.map((item) => {
    return {
      ...item
    }
  })
  return data;
}

class Interview extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      candidates: getData()
    }

  }

  render() {

    return (

      <Container>

        <div className="row">

          <h3 className="col s12 m7 l6">Interview Dashboard</h3>

          <UserBlock user_name="Kyle Palmer" />

        </div>

        <div className="row">

          {this.state.candidates
            .filter(candidate => candidate.job_offer === false && candidate.added_by)
            .map(candidate => {

              return (

                <InterviewBlock key={candidate.id} candidate_info={candidate} />

              );

            })}

        </div>


      </Container>
    );
  }

}

export default Interview;
