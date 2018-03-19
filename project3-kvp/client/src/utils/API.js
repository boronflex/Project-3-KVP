//import axios from "axios";

export default {

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

  }

};