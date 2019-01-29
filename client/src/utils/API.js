import axios from 'axios';

export default {

  // Get ALL users in DB
  getUsers: function() {
    return axios.get('/api/users');
  },
  // verify (Get) one user by ID (username and password)
  // verify user exists in DB
  getUser: function(userData) {
    return axios.get('/api/login/' + userData);
  },
  // Delete user by ID
  deleteUser: function(id) {
    return axios.delete('/api/users/' + id);
  },
  // Save (register) user to the database (username, password, email)
  saveUser: function(userData) {
    return axios.post('/api/register', userData);
  }

};
