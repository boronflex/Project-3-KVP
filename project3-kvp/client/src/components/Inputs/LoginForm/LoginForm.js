import React from "react";
import "./LoginForm.css";

//this is not final, just setting it quickly up to take input

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user_name: '',
      password: '',
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
                <label htmlFor="user_name">user name</label>
                <input
                  id="user_name"
                  name="user_name"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="text"
                  className="validate" />
              </div>
            </div>

            <div className="section">
              <div className="input-field col s12">
                <input
                  id="password"
                  name="password"
                  value={this.state.value}
                  onChange={this.handleChange}
                  type="password"
                  className="validate" />
                <label htmlFor="password">password</label>
              </div>
            </div>

          </div>

        </div>

      </form>
    );
  }

}

export default LoginForm;
