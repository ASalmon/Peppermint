import API from '../utils/API';

import { GET_TOPPERFORMINGSTORES } from './types';

const getTopPerformingStores = () => async (dispatch) => {
  const stores = await API.getTopPerformingStores();
  dispatch({
    type: GET_TOPPERFORMINGSTORES,
    payload: stores,
  });
};

export default getTopPerformingStores;
