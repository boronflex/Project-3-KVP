import React from "react";
import "./NoOffer.css";

import { Input } from "react-materialize"

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class NoOffer extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      no_offer_reason: "",
      no_offer_notes: "",
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
              <div className="input-field">
                <Input
                  type='select'
                  name="no_offer_reason"
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <option value="" disable="true">No Offer Reason</option>
                  <option value="not available">Not available</option>
                  <option value="not qualified">Not qualified</option>
                  <option value="too expensive">Too expensive</option>
                  <option value="not interested">Not Interested</option>
                  <option value="other">Other (see notes)</option>
                </Input>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="no_offer_notes"
                  name="no_offer_notes"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="no_offer_notes">Notes</label>
              </div>
            </div>

            <button className="waves-effect waves-light btn">Submit</button>

          </div>

        </div>

      </form>

    );
  }

}

export default NoOffer;
