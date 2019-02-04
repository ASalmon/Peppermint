import API from '../utils/API';

import {
  GET_TOPSELLINGITEMSBYAMOUT,
  GET_TOPSELLINGITEMSBYQUANTITY,
} from './types';

export const getTopSellingItemsByAmount = () => (dispatch) => {
  const sales = API.getSalesData();
  dispatch({
    type: GET_TOPSELLINGITEMSBYAMOUT,
    payload: sales,
  });
};

export const getTopSellingItemsByQuantity = () => (dispatch) => {
  dispatch({
    type: GET_TOPSELLINGITEMSBYQUANTITY,
  });
};
