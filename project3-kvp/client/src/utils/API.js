//import axios from "axios";

export default {

  //user start############

  getUsers: function() {

  //   return axios.get("api/users")
  // }
    
    var getUsers = new Request('/api/users', {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

    const request = async () => {

      const response = await fetch(getUsers)

      const json = await response.json()

      return json;

    }

    return request();
  },

  saveUser: function() {

  },

  //User end ###################

  //inputs page##################

  addCandidate: function (candidateData){

    const addUser = new Request('http://localhost:3000/api/new-candidate', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(candidateData)
    });

    //console.log(addUser);

    const postrequest = async () => {

      const response = await fetch(addUser)

      const status = await response.status

      return status;

    }

    postrequest();

  }

  //inputs page###################

};