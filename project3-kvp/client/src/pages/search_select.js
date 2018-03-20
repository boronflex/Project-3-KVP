import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";

import API from "../utils/API";

import SelectableTable from "../components/Table/SelectableTable";

import UserBlock from '../components/UserBlock/UserBlock';

import Container from "../components/Container";

class Search_Select extends React.Component {

  constructor() {
    super();
    this.state = {
      candidates: [],
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

    return (

      <Container>

        <div className="row">

          <h3 className="col s12 m7 l6">Search and Select Candidates</h3>

          <UserBlock user_name="Kyle Palmer" />

        </div>

        <SelectableTable candidates={this.state.candidates}/>

      </Container>

    )

  }

}

export default Search_Select;
