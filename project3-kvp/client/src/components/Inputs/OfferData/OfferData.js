import React from "react";
import "./OfferData.css";

import ProjectDropDown from '../../ProjectDisplayBlock/ProjectDropDown/ProjectDropDown'
import SpreadDropDown from '../../ProjectDisplayBlock/SpreadDropdown/SpreadDropDown'

import projectSampleData from '../../SampleData/project_sampledata';

function getData(inputData) {
  const data = inputData.map((item) => {
    return {
      ...item
    }
  })
  return data;
}

class OfferData extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      projects: getData(projectSampleData),
      offer_project: '',
      offer_spread: '',
      offer_title: 0,
      offer_pay: 0,
      requested_start_date: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProjectChange = (dataFromChild) => {
    this.setState({ offer_project: dataFromChild });
    console.log("state changed inparent")
  }

  handleSpreadChange = (dataFromChild) => {
    this.setState({ offer_spread: dataFromChild });
    console.log("state changed inparent")
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

    console.log(this.state)

    alert('A name was submitted: ' + this.state.state);
    event.preventDefault();
  }


  render() {

    return (

      <form onSubmit={this.handleSubmit}>

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
              <select
                name="offer_title"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true">Title</option>
                <option value="PC">PC</option>
                <option value="IM">IM</option>
                <option value="RM">RM</option>
              </select>
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
