import React from "react";

import API from "../utils/API";

import Container from "../components/Container";

import HRInfoBlock from '../components/InfoBlock/HR_InfoBlock/HR_InfoBlock';
import UserBlock from '../components/UserBlock/UserBlock'

// import testData from '../components/SampleData/hr_sampledata';

// function getData() {
//   const data = testData.map((item) => {
//     return {
//       ...item
//     }
//   })
//   return data;
// }

//console.log(getData());

class HR_view extends React.Component {

  state = {
    loading: true,
    candidates: [],
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    API.getCandidatesHistory()
      .then(res =>
        this.setState({ candidates: res.data, loading: false })
      )
      .catch(err => console.log(err));
  };


  render() {

    
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    return (

      <Container>

        <div className="row">

          <h3 className="col s12 m7 l6">Requests for Hire</h3>

          <UserBlock user_name="Kyle Palmer"/>

        </div>


        {this.state.candidates
          .filter(candidate => candidate.job_offer === true)
          .map(candidate => {

            return (

              <HRInfoBlock key={candidate.id} candidate_info={candidate} />

            );

          })}

      </Container >
    )
  }
}

export default HR_view;
