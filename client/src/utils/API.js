import axios from 'axios';
import moment from 'moment';
import {
  getTopSellingItemsByPriceQuery,
  getTopSellingItemsByQuantityQuery,
  getTopPerformingStoresQuery,
  getYearlyPerformance,
} from './query';

export default {
  // Verify user exists in DB (username/password)
  login: userData => axios.post('/api/login/', userData),

  // Save (register) user to the database (username, password, email)
  register: userData => axios.post('/api/register', userData),

  // GraphQL query for top selling items by price
  getTopSellingItemsByPrice: () => axios({
    url: 'http://localhost:3000/graphql',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: { query: getTopSellingItemsByPriceQuery },
  })
    .then((response) => {
      const items = response.data.data.topSellingItems;
      const formatedData = [];
      for (let i = 0; i < items.length && i < 4; i += 1) {
        const item = {};
        item.id = i;
        item.name = items[i]._id;
        item.value = items[i].totalPrice.toFixed(2);
        formatedData.push(item);
      }
      return formatedData;
    })
    .catch(error => console.log(error)),

  // GraphQL query for top selling items by quantity
  getTopSellingItemsByQuantity: () => axios({
    url: 'http://localhost:3000/graphql',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: { query: getTopSellingItemsByQuantityQuery },
  })
    .then((response) => {
      const items = response.data.data.topSellingItems;
      const formatedData = [];
      for (let i = 0; i < items.length && i < 4; i += 1) {
        const item = {};
        item.id = i;
        item.name = items[i]._id;
        item.value = items[i].totalQuantity;
        formatedData.push(item);
      }
      return formatedData;
    })
    .catch(error => console.log(error)),

  // GraphQL query for top performing stores
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
      for (let i = 0; i < stores.length && i < 4; i += 1) {
        const store = {};
        store.id = i;
        store.name = stores[i]._id;
        store.value = stores[i].totalAmount;
        formatedData.push(store);
      }
      return formatedData;
    })
    .catch(error => console.log(error)),

  getSalesDistributionByStore: () => axios({
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
      const formatedData = {
        labels: [],
        series: [],
      };
      for (let i = 0; i < stores.length; i += 1) {
        formatedData.labels.push(stores[i]._id);
        formatedData.series.push(stores[i].totalAmount);
      }
      return formatedData;
    })
    .catch(error => console.log(error)),

  getYearlyPerformance: () => axios({
    url: 'http://localhost:3000/graphql',
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: { query: getYearlyPerformance },
  }).then((response) => {
    const yearlyData = response.data.data.performancebyDates;
    const { year } = yearlyData[0].date;
    const formatedData = {
      xaxis: {
        categories: [],
      },
      lineSeries: {
        name: '',
        data: [],
      },
    };
    yearlyData.forEach((item) => {
      const { month } = item.date;
      const monthStr = moment()
        .month(month - 1)
        .format('MMM');
      formatedData.xaxis.categories.push(monthStr);
      formatedData.lineSeries.data.push(item.total);
    });
    formatedData.lineSeries.name = year;
    return formatedData;
  }),
};
