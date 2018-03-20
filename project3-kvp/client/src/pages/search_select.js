import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";

// import Moment from "moment";

import API from "../utils/API";

import SelectableTable from "../components/Table/SelectableTable";

import UserBlock from '../components/UserBlock/UserBlock';

import Container from "../components/Container";

class Search_Select extends React.Component {

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

  handleParentChange = (dataFromChild) => {

    this.setState({ selected: dataFromChild });

    //let selected = this.state.selected

    //let that = this;

    API.selectForInterview(dataFromChild)
    // .then(function (res) {
    //   if (res === 200) {
    //       that.setState()
    //     }
    //   }
    // )
    // .catch(err => console.log(err));

  }

  render() {

    const candidateArray = this.state.candidates;

    if (candidateArray.length === 0) {

      return <div>Loading...</div>;

    } else {

      return (

        <Container>

          {/* {console.log(this.state.candidates)} */}

          <div className="row">

            <h3 className="col s12 m7 l6">Search and Select Candidates</h3>

            <UserBlock user_name="Kyle Palmer" />

          </div>

          <SelectableTable propsData={this.state.candidates} parentChange={this.handleParentChange}/>

        </Container>

      )

    }
  }

}

export default Search_Select;
