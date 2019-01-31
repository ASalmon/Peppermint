import axios from 'axios';

export default {

  // Verify user exists in DB (username/password)
  login: userData => axios.post('/api/login/', userData),
  // Save (register) user to the database (username, password, email)
  register: userData => axios.post('/api/register', userData),
};
