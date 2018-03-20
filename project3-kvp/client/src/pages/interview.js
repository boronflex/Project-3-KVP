import React from "react";
import API from "../utils/API";

import Container from "../components/Container";

import { isNull } from "util";

import UserBlock from '../components/UserBlock/UserBlock';
import InterviewBlock from '../components/InfoBlock/InterviewBlock/InterviewBlock';
import ProjectDisplayBlock from '../components/ProjectDisplayBlock/ProjectDisplayBlock/ProjectDisplayBlock';

// import testData from '../components/SampleData/hr_sampledata';

// function getData(inputData) {
//   const data = inputData.map((item) => {
//     return {
//       ...item
//     }
//   })
//   return data;
// }

class Interview extends React.Component {

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

        {console.log(this.state.candidates)}

        <div className="row">

          <h3 className="col s12 m7 l6">Interview Dashboard</h3>

          <UserBlock user_name="Kyle Palmer" />

        </div>

        <div className="row">

          <div className="col s12 m12 l4 push-l8" >

            <ProjectDisplayBlock column_size="section col s12 m12 l12" />

          </div>

          <div className="section col s12 m12 l8 pull-l4">

            {this.state.candidates
              .filter(candidate => isNull(candidate.job_offer) && candidate.added_by)
              .map(candidate => {

                return (

                  <InterviewBlock key={candidate.id} candidate_info={candidate} />

                );

              })}

          </div>



        </div>


      </Container>
    );
  }
}


export default Interview;
