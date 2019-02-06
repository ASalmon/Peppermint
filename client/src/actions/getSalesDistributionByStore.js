import API from '../utils/API';

import { GET_SALESDISTRIBUTIONBYSTORE } from './types';

const getSalesDistributionByStore = () => async (dispatch) => {
  const stores = await API.getSalesDistributionByStore();
  dispatch({
    type: GET_SALESDISTRIBUTIONBYSTORE,
    payload: stores,
  });
};

export default getSalesDistributionByStore;
