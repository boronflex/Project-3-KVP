import React from "react";

import Container from "../components/Container";

import API from "../utils/API";

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

  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
      dataLoaded: false,
    }

  }

  componentDidMount() {
    this.getCandidatesHistory();
    // this.setState({ dataLoaded: true });
    console.log(this.state)
  }

  getCandidatesHistory = () => {

    API.getCandidatesHistory()
      .then(res =>
        this.setState({
          candidates: res,
        })
      )
  }

  render() {

    if (!this.state.dataLoaded) {

      return <div>Loading...</div>

    } else {

      return (

        <Container>

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
                .filter(candidate => candidate.job_offer === false && candidate.added_by)
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

}

export default Interview;
