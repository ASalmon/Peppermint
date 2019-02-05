import API from '../utils/API';

import { GET_TOPSELLINGITEMSBYPRICE } from './types';

const getTopSellingItemsByPrice = () => async (dispatch) => {
  const items = await API.getTopSellingItemsByPrice();
  dispatch({
    type: GET_TOPSELLINGITEMSBYPRICE,
    payload: items,
  });
};

export default getTopSellingItemsByPrice;
