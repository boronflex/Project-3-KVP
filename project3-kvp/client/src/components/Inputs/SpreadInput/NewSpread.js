import React from "react";
import "./NewSpread.css";

import ProjectDropDown from '../../ProjectDisplayBlock/ProjectDropDown/ProjectDropDown'

import projectSampleData from '../../SampleData/project_sampledata';

function getData(inputData) {
  const data = inputData.map((item) => {
    return {
      ...item
    }
  })
  return data;
}

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class NewSpread extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: getData(projectSampleData),
      project_idfk: 0,
      spread_num: 0,
      spread_city: '',
      spread_state: '',
      supervisor_name: '',
      supervisor_id: 0,
      per_diem: 0,
      mileage: 0,
      vehicle: '',
      computer: '',
      phone: '',
      utv: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProjectChange = (dataFromChild) => {
    this.setState({ project_idfk: dataFromChild });
    console.log("state changed in parent")
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

        <div className="row">

          <div className="col s12">

            <div className="input-field col s6">
              <ProjectDropDown projects={this.state.projects} parentChange={this.handleProjectChange} />
            </div>
            <div className="input-field col s6">
              <label htmlFor="spread_num">Spread Number</label>
              <input
                id="spread_num"
                name="spread_num"
                value={this.state.value}
                onChange={this.handleChange}
                type="number"
                className="validate" />
            </div>


            <div className="input-field col s8">
              <label htmlFor="supervisor_name">supervisor name</label>
              <input
                id="supervisor_name"
                name="supervisor_name"
                value={this.state.value}
                onChange={this.handleChange}
                type="text"
                className="validate" />
            </div>
            <div className="input-field col s4">
              <label htmlFor="supervisor_id">supervisor id</label>
              <input
                id="supervisor_id"
                name="supervisor_id"
                value={this.state.value}
                onChange={this.handleChange}
                type="number"
                className="validate" />
            </div>


            <div className="input-field col s8">
              <input
                id="spread_city"
                name="spread_city"
                value={this.state.value}
                onChange={this.handleChange}
                type="text"
                className="validate" />
              <label htmlFor="spread_city">City</label>
            </div>
            <div className="input-field col s4">
              <select
                name="spread_state"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true" >Choose a State</option>
                <option value="1">Texas</option>
                <option value="2">Oklahoma</option>
                <option value="3">Louisiana</option>
              </select>
            </div>

            <div className="input-field col s4">
              <input
                id="per_diem"
                name="per_diem"
                value={this.state.value}
                onChange={this.handleChange}
                type="number"
                className="validate" />
              <label htmlFor="per_diem">Per Diem</label>
            </div>
            <div className="input-field col s4">
              <input
                id="mileage"
                name="mileage"
                value={this.state.value}
                onChange={this.handleChange}
                type="number"
                className="validate" />
              <label htmlFor="mileage">mileage</label>
            </div>
            <div className="input-field col s4">
              <select
                name="vehicle"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true">vehicle</option>
                <option value="true">yes</option>
                <option value="false">no</option>
              </select>
            </div>


            <div className="input-field col s4">
              <select
                name="computer"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true">computer</option>
                <option value="true">yes</option>
                <option value="false">no</option>
              </select>
            </div>
            <div className="input-field col s4">
              <select
                name="phone"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true">phone</option>
                <option value="true">yes</option>
                <option value="false">no</option>
              </select>
            </div>
            <div className="input-field col s4">
              <select
                name="utv"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true">utv</option>
                <option value="true">yes</option>
                <option value="false">no</option>
              </select>
            </div>

            <button className="waves-effect waves-light btn">Submit</button>

          </div>

        </div>

      </form>
    );
  }

}

export default NewSpread;
