export default {

  //user start############

  getUsers: function() {

  //   return axios.get("api/users")
  // }
    
    var getUsers = new Request('/api/users', {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

    const getrequest = async () => {

      const response = await fetch(getUsers)

      const json = await response.json()

      return json;

    }

    return getrequest();
  },

  saveUser: function() {

  },

  //User end ###################

  //inputs page##################

  addCandidate: function (candidateData){

    const addUser = new Request('/api/new-candidate', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(candidateData)
    });

    const postrequest = async () => {

      const response = await fetch(addUser)

      const status = await response.status

      return status;

    }

    return postrequest();

  },

  addProject: function (projectData){

    const addUser = new Request('/api/new-project', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(projectData)
    });

    const postrequest = async () => {

      const response = await fetch(addUser)

      const status = await response.status

      return status;

    }

    return postrequest();

  },

  addSpread: function (spreadData){

    const addUser = new Request('/api/new-spread', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(spreadData)
    });

    const postrequest = async () => {

      const response = await fetch(addUser)

      const status = await response.status

      return status;

    }

    return postrequest();

  },

  getProjects: function() {

    //   return axios.get("api/users")
    // }
      
      var getProjects = new Request('/api/projects', {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' })
      });
  
      const getrequest = async () => {
  
        const response = await fetch(getProjects)
  
        const json = await response.json()
  
        return json;
  
      }
  
      return getrequest();
    },
  

  //inputs page###################

  //search select page#############

  getCandidates: function() {

    //   return axios.get("api/users")
    // }
      
      var getCandidates = new Request('/api/candidates', {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' })
      });
  
      const getrequest = async () => {
  
        const response = await fetch(getCandidates)
  
        const json = await response.json()
  
        return json;
  
      }
  
      return getrequest();
    },
  
  //serch select page ##############


};