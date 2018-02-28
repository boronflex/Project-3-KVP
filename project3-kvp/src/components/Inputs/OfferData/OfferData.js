import React from "react";
import "./OfferData.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class OfferData extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      offer_title: 0,
      offer_pay: 0,
      requested_start_date: '',
      job_offered: '',
      offer_notes: ''
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
                <select
                  name="offer_title"
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <option value="" disable="true">Title</option>
                  <option value="project 1">PC</option>
                  <option value="project 2">IM</option>
                  <option value="project 3">RM</option>
                </select>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <label htmlFor="spread_num">offered pay</label>
                <input
                  id="offer_pay"
                  name="offer_pay"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="number"
                  className="validate" />
              </div>
            </div>

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

            <div className="section">
              <div className="input-field col s12">
                <select
                  name="job_offered"
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <option value="" disable="true">job offered</option>
                  <option value="true">yes</option>
                  <option value="false">no</option>
                </select>
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="offer_notes"
                  name="offer_notes"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
                <label htmlFor="offer_notes">offer notes</label>
              </div>
            </div>

              <button className="waves-effect waves-light btn">Submit</button>

          </div>

        </div>

      </form>

    );
  }

}

export default OfferData;
