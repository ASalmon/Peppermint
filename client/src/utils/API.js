import axios from 'axios';
import { getTopSellingItemsQuery } from './query';

export default {
  // Verify user exists in DB (username/password)
  login: userData => axios.post('/api/login/', userData),
  // Save (register) user to the database (username, password, email)
  register: userData => axios.post('/api/register', userData),
  getSalesData: () => axios({
    url: 'http://localhost:3000/graphql',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: { query: getTopSellingItemsQuery },
  })
    .then(response => console.log(response))
    .catch(error => console.log(error)),
};
