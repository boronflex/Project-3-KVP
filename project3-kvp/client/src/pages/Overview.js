import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
import Container from "../components/Container";

import API from "../utils/API";

import UserBlock from '../components/UserBlock/UserBlock';

import SelectableTable from "../components/Table/SelectableTable";

class Overview extends React.Component {

  constructor() {
    super();
    this.state = {
      candidates: [],
      selected: [],
      // date: ''
    }
  }

  componentDidMount() {
    this.getCandidates();
  }

  getCandidates = () => {

    API.getCandidates()
      .then(res =>
        this.setState({
          candidates: res
        })
      )

  }


  render() {

    const candidateArray = this.state.candidates;

    if (candidateArray.length === 0) {

      return <div>Loading...</div>;

    } else {

      return (


        <Container>

          <div className="row">

            <h3 className="col s12 m7 l6">Overview</h3>

            <UserBlock user_name="Kyle Palmer" />

          </div>

          <SelectableTable propsData={this.state.candidates}/>

        </Container>

      )

    }
  }
}

export default Overview;
