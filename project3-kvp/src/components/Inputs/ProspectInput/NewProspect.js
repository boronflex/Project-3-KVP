import React from "react";
import "./NewProspect.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class NewProspect extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      nick_name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      phone_1: '',
      phone_2: '',
      email: '',
      years_exp: '',
      prev_position: '',
      comments: ''
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
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  name="first_name"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
              </div>
              <div className="input-field col s4">
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  name="last_name"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
              </div>
              <div className="input-field col s4">
                <label htmlFor="last_name">Nick Name</label>
                <input
                  id="nick_name"
                  name="nick_name"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
              </div>
            </div>

            <div className="section">
              <div className="input-field col s5">
                <input
                  id="street"
                  name="street"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="first_name">Street</label>
              </div>
              <div className="input-field col s3">
                <input
                  id="city"
                  name="city"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s2">
                <select
                  name="state"
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <option value="" disable="true" >Choose a State</option>
                  <option value="1">Texas</option>
                  <option value="2">Oklahoma</option>
                  <option value="3">Louisiana</option>
                </select>
                <label>State</label>
              </div>
              <div className="input-field col s2">
                <input
                  id="zip"
                  name="zip"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="zip`">Zip</label>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s4">
                <input
                  id="phone_1"
                  name="phone_1"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="tel"
                  className="validate" />
                <label htmlFor="phone_1">Phone 1</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="phone_2"
                  name="phone_2"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="tel"
                  className="validate" />
                <label htmlFor="phone_2">Phone 2</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="email"
                  name="email"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="email"
                  className="validate" />
                <label htmlFor="email">E-mail</label>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s4">
                <input
                  id="years_exp"
                  name="years_exp"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="years_exp">Years Experience</label>
              </div>
              <div className="input-field col s4">
                <select
                  name="prev_position"
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <option value="" disable="true">Last held position</option>
                  <option value="1">PC</option>
                  <option value="2">IM</option>
                  <option value="3">RM</option>
                </select>
                <label>Previous Position</label>
              </div>
              <div className="input-field col s4">
                <input
                  id="comments"
                  name="comments"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="comments">Comments</label>
              </div>
            </div>
            <button className="waves-effect waves-light btn">Submit</button>

          </div>

        </div>

      </form>
    );
  }

}

export default NewProspect;
