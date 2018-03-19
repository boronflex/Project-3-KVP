export default {

  getUsers: function() {
    return axios.get("/api/users");
  },

  saveUser: function(bookData) {
    return axios.post("/api/new-user", bookData);
  }

};