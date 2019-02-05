import axios from 'axios';
import {
  getTopSellingItemsQuery,
  getTopPerformingStoresQuery,
} from './query';

export default {
  // Verify user exists in DB (username/password)
  login: userData => axios.post('/api/login/', userData),

  // Save (register) user to the database (username, password, email)
  register: userData => axios.post('/api/register', userData),

  getTopSellingItemsByPrice: () => axios({
    url: 'http://localhost:3000/graphql',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: { query: getTopSellingItemsQuery },
  })
    .then((response) => {
      const items = response.data.data.topSellingItems;
      const formatedData = [];
      for (let i = 0; i < items.length && i < 4; i += 1) {
        const item = {};
        item.id = i;
        item.name = items[i]._id.itemname;
        item.value = items[i].totalPrice;
        formatedData.push(item);
      }
      return formatedData;
    })
    .catch(error => console.log(error)),

  getTopPerformingStores: () => axios({
    url: 'http://localhost:3000/graphql',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: { query: getTopPerformingStoresQuery },
  })
    .then((response) => {
      const stores = response.data.data.topPerformingStores;
      const formatedData = [];
      for (let i = 0; i < stores.length; i += 1) {
        const store = {};
        store.id = i;
        store.name = stores[i]._id;
        store.value = stores[i].totalAmount;
        formatedData.push(store);
      }
      return formatedData;
    })
    .catch(error => console.log(error)),
};
