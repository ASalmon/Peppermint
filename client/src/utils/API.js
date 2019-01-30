import axios from 'axios';

export default {

  // verify (Get) one user by ID (username and password)
  // verify user exists in DB
  login: userData => axios.post('localhost:3000/api/login/', userData),
  // Save (register) user to the database (username, password, email)
  register: userData => axios.post('localhost:3000/api/register', userData),
};
