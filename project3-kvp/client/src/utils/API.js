import axios from "axios";

export default {

  //user start############

  getUsers: function () {

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

  saveUser: function () {

  },

  //User end ###################

  //inputs page##################

  addCandidate: function (candidateData) {

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

  addProject: function (projectData) {

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

  addSpread: function (spreadData) {

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

  getSpreads: function () {
    return axios.get("api/spreads")
  },

  getProjects: function () {

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

  getCandidates: function () {

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

  getCandidatesHistory: function () {
    return axios.get("/api/candidates-history")
  },

  selectForInterview: function (candidatePicks) {

    //console.log(candidatePicks);

    candidatePicks.forEach(function (item) {

      //console.log(item)

      const addInterviewees = new Request('/api/pick-interviewees', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ "candidate_idfk": item })
      });

      const postrequest = async () => {

        const response = await fetch(addInterviewees)

        const status = await response.status

        return status;

      }

      //return postrequest();

      const moveCandidate = new Request('/api/in-hiring-process', {
        method: 'PUT',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ "candidate_idfk": item })
      });

      const putrequest = async () => {

        const response = await fetch(moveCandidate)

        const status = await response.status

        return status;


      }

      return {

        put: putrequest(),
        post: postrequest()

      }

    });

  },

  makeOffer: function (candidateData) {
    return axios.put("api/make-offer", candidateData)
  },

  noOffer: function (candidateData) {
    return axios.put("api/no-offer", candidateData)
  },

  //serch select page ##############

  //HR############## page##############

  appInProgress: function (candidateData) {
    return axios.put("api/app-inprogress", candidateData)
  },

  appComplete: function (candidateData) {
    return axios.put("api/app-complete", candidateData)
  },

  referencesInProgress: function (candidateData) {
    return axios.put("api/refs-inprogress", candidateData)
  },

  referencesComplete: function (candidateData) {
    return axios.put("api/refs-complete", candidateData)
  },

  offerPaperworkInProgress: function (candidateData) {
    return axios.put("api/off-inprogress", candidateData)
  },

  offerPaperworkCompleted: function (candidateData) {
    return axios.put("api/off-complete", candidateData)
  },

  drugTestinProgress: function (candidateData) {
    return axios.put("api/drugtest-inprogress", candidateData)
  },

  drugTestCompleted: function (candidateData) {
    return axios.put("api/drugtest-complete", candidateData)
  },

  fitnessTestInProgress: function (candidateData) {
    return axios.put("api/fitnesstest-inprogress", candidateData)
  },

  fitnessTestComplete: function (candidateData) {
    return axios.put("api/fitnesstest-complete", candidateData)
  },

  hired: function (candidateData) {
    return axios.put("api/hired", candidateData)
  },

};