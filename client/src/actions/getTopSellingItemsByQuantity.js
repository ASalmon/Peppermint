import API from '../utils/API';

import { GET_TOPSELLINGITEMSBYQUANTITY } from './types';

const getTopSellingItemsByQuantity = () => async (dispatch) => {
  const items = await API.getTopSellingItemsByQuantity();
  dispatch({
    type: GET_TOPSELLINGITEMSBYQUANTITY,
    payload: items,
  });
};

export default getTopSellingItemsByQuantity;
