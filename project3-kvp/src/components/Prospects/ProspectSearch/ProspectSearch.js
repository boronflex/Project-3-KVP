import React from "react";
import "./ProspectSearch.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class ProspectSearch extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      search_title: '',
      search_state: ''
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

            <div className="input-field col s3">
              <select
                name="search_title"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true">Position</option>
                <option value="project 1">PC</option>
                <option value="project 2">IM</option>
                <option value="project 3">RM</option>
              </select>
            </div>

            <div className="input-field col s3">
              <select
                name="search_state"
                value={this.state.value}
                onChange={this.handleChange}>
                <option value="" disable="true">state</option>
                <option value="Texas">Texas</option>
                <option value="Oklahoma">Oklahoma</option>
              </select>
            </div>

          </div>

        </div>

      </form>

    );
  }
}

export default ProspectSearch;
