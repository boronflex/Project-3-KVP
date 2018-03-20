import React from "react";
import "./NewProject.css";
import API from "../../../utils/API";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class NewProject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      project_name: '',
      project_number: 0,
      client_name: '',
      survey_manager: '',
      survey_manager_empid: '',
      number_spreads: 0,
      project_city: '',
      project_state: '',

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    let projectData = this.state;

    let that = this;

    API.addProject(projectData)
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

        <div className="row">

          <div className="col s12">

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="project_name"
                  name="project_name"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="project_name">name</label>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <label htmlFor="project_number">number</label>
                <input
                  id="project_number"
                  name="project_number"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="number"
                  className="validate" />
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <label htmlFor="client_name">client name</label>
                <input
                  id="client_name"
                  name="client_name"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="survey_manager"
                  name="survey_manager"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="survey_manager">manager</label>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="survey_manager_empid"
                  name="survey_manager_empid"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="number"
                  className="validate" />
                <label htmlFor="survey_manager_empid">manager id#</label>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="number_spreads"
                  name="number_spreads"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="number"
                  className="validate" />
                <label htmlFor="number_spreads">number of spreads</label>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="project_city"
                  name="project_city"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="project_city">City</label>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="project_state"
                  name="project_state"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="project_state">State</label>
              </div>
            </div>

            <button className="waves-effect waves-light btn">Submit</button>

          </div>

        </div>

      </form>
    );
  }

}

export default NewProject;
