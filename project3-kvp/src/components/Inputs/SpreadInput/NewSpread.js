import React from "react";
import "./NewSpread.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class NewSpread extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
              <div className="input-field col s4">
                <select
                  name="project_idfk"
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <option value="" disable="true">project</option>
                  <option value="project 1">project 1</option>
                  <option value="project 2">project 2</option>
                  <option value="project 3">project 3</option>
                </select>
              </div>
              <div className="input-field col s4">
                <label htmlFor="spread_num">number</label>
                <input
                  id="spread_num"
                  name="spread_num"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="number"
                  className="validate" />
              </div>
            </div>

            <div className="section">
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
            </div>

            <div className="section">
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
            </div>

            <div className="section">
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
            </div>

            <div className="section">
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

        </div>

      </form>
    );
  }

}

export default NewSpread;
