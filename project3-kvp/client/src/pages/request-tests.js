import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
import Container from "../components/Container";

import API from "../utils/API";

import UserBlock from '../components/UserBlock/UserBlock';


class Request_tests extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "AJAX request test page",
      employee_id: "",
      last_name: "",
      first_name: "",
      user_type: "",
      user_name: "",
      user_pword: "",
      users: [],
    }
  }


  //making ajax calls here

  componentDidMount() {

    console.log('component has mounted');

    this.getUsers();

  }

  getUsers = () => {

    API.getUsers()
      .then(res =>
        this.setState({
          users: res
        })
      )
      
  }

  addUser(event) {

    var that = this;
    event.preventDefault();
    console.log('in method');

    let user_data = {

      employee_id: this.refs.employee_id.value,
      last_name: this.refs.last_name.value,
      first_name: this.refs.first_name.value,
      user_type: this.refs.user_type.value,
      user_name: this.refs.user_name.value,
      user_pword: this.refs.user_pword.value,

    };

    const addUser = new Request('http://localhost:3000/api/new-user', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(user_data)
    });

    //console.log(addUser);

    const postrequest = async () => {

      const response = await fetch(addUser)

      const json = await response.json();

      //const data = JSON.stringify(json);

      let users = that.state.users;
      users.push(user_data);

      console.log(json);

      that.setState({

        users: users
      })

    }

    postrequest();

  }

  updateUser(event) {
    
    var that = this;
    event.preventDefault();
    console.log('in method');

    let user_data = {

      employee_id: this.refs.employee_id.value,
      last_name: this.refs.last_name.value,
      first_name: this.refs.first_name.value,
      user_type: this.refs.user_type.value,
      user_name: this.refs.user_name.value,
      user_pword: this.refs.user_pword.value,

    };

    const addUser = new Request('http://localhost:3000/api/update-user', {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(user_data)
    });

    //console.log(addUser);

    const putrequest = async () => {

      const response = await fetch(addUser)

      const json = await response.json();

      //const data = JSON.stringify(json);

      let users = that.state.users;
      users.push(user_data);

      console.log(json);

      that.setState({

        users: users
      })

    }

    putrequest();

  }


  render() {

    let title = this.state.title;

    let users = this.state.users;

    return (

      <Container>

        <div className="row">

          <h3 className="col s12 m7 l6">{title}</h3>

          <UserBlock user_name="Kyle Palmer" />

        </div>

        <div className="row">

          <form ref="userForm" className="col s6">

            <input type="number" ref="employee_id" placeholder="employee id" />
            <input type="text" ref="last_name" placeholder="last name" />
            <input type="text" ref="first_name" placeholder="first name" />
            <input type="text" ref="user_type" placeholder="user type" />
            <input type="text" ref="user_name" placeholder="user name" />
            <input type="text" ref="user_pword" placeholder="password" />
            <button onClick={this.addUser.bind(this)}>Add employee</button>
            <button onClick={this.updateUser.bind(this)}>update user</button>

          </form>

          <div className="col s6">
            <pre>{JSON.stringify(users)}</pre>
          </div>

        </div>

      </Container>

    )

  }

}

export default Request_tests;
