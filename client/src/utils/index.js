import axios from 'axios';

import {
  getSalesQuery,
} from './query';

export default {
  getSalesData: () => axios({
    url: 'graphql/',
    method: 'POST',
    data: getSalesQuery,
  })
    .then((sales) => {
      console.log(sales);
      return sales.data;
    })
    .catch(error => console.log(error)),
};
