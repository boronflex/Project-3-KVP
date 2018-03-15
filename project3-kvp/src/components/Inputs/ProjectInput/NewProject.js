import React from "react";
import "./NewProject.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class NewProject extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      project_number: 0,
      project_name: '',
      project_manager: '',
      number_of_spreads: 1,
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

    console.log(this.state)

    alert('A name was submitted: ' + this.state.state);
    event.preventDefault();
  }


  render() {

    return (

      <form onSubmit={this.handleSubmit}>

        <div className="row">

          <div className="col s12">

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
                <input
                  id="project_manager"
                  name="project_manager"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="tel"
                  className="validate" />
                <label htmlFor="project_manager">manager</label>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="number_of_spreads"
                  name="number_of_spreads"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="number"
                  className="validate" />
                <label htmlFor="number_of_spreads">number of spreads</label>
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
