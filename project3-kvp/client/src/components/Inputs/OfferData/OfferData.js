import React from "react";
import "./OfferData.css";

import { Input } from "react-materialize"

import API from "../../../utils/API"

import ProjectDropDown from '../../ProjectDisplayBlock/ProjectDropDown/ProjectDropDown'
import SpreadDropDown from '../../ProjectDisplayBlock/SpreadDropdown/SpreadDropDown'

// import projectSampleData from '../../SampleData/project_sampledata';

// function getData(inputData) {
//   const data = inputData.map((item) => {
//     return {
//       ...item
//     }
//   })
//   return data;
// }



class OfferData extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      candidateID: this.props.candidateID,
      projects: [],
      offer_project: 0,
      offer_spread: 0,
      offer_title: '',
      offer_pay: 0,
      requested_start_date: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    //console.log('component has mounted');
  
    this.getProjectData();
  
  }
  
  getProjectData = () => {
  
    API.getSpreads()
      .then(res =>
        this.setState({
          projects: res.data
        })
      )
  }

  handleProjectChange = (dataFromChild) => {
    console.log(dataFromChild)
    this.setState({ offer_project: dataFromChild });
    
  }

  handleSpreadChange = (dataFromChild) => {
    this.setState({ offer_spread: dataFromChild });
    console.log("spread changed triggerd")
  }


  handleChange(event) {

    const target = event.target;
    const value = target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })

  }


  handleSubmit(event) {

    event.preventDefault();

    let candidateData = {
      candidateID: this.state.candidateID,
      offer_project: parseInt(this.state.offer_project, 10),
      offer_spread: this.state.offer_spread,
      offer_title: this.state.offer_title,
      offer_pay: parseInt(this.state.offer_pay, 10),
      requested_start_date: this.state.requested_start_date
    } 

    console.log(candidateData)

    let that = this;

    API.makeOffer(candidateData)
      .then(function (res) {
        if (res === 200) {
            that.setState()
          }
        }
      )
      .catch(err => console.log(err));
  }


  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        {console.log("project selected" + this.state.offer_project)}
        {console.log("spread selected" + this.state.offer_spread)}

        <div className="row col s12">

          <div className="input-field col s6">

            <p>Project:</p>

            <ProjectDropDown projects={this.state.projects}  parentChange={this.handleProjectChange}/>

          </div>

          <div className="input-field col s6">

            <p>Spread:</p>

            <SpreadDropDown projects={this.state.projects} selectedProject={this.state.offer_project} parentChange={this.handleSpreadChange}/>

          </div>

        </div>

        <div className="row col s12">

          <div className="section">
            <div className="input-field col s6">
              <Input
                type='select'
                name="offer_title"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true">Title</option>
                <option value="PC">PC</option>
                <option value="IM">IM</option>
                <option value="RM">RM</option>
              </Input>
            </div>

            <div className="input-field col s6">
              <label htmlFor="offer_pay">offered pay</label>
              <input
                id="offer_pay"
                name="offer_pay"
                value={this.state.value}
                onChange={this.handleChange}
                type="number"
                className="validate" />
            </div>
          </div>

        </div>

        <div className="row col s12">

          <div className="section">
            <div className="input-field col s12">
              <input
                id="requested_start_date"
                name="requested_start_date"
                value={this.state.value}
                onChange={this.handleChange}
                type="date"
                className="validate" />
              <label htmlFor="requested_start_date"></label>
            </div>
          </div>
        </div>

        <button className="waves-effect waves-light btn">Submit</button>

      </form>

    );
  }

}

export default OfferData;
