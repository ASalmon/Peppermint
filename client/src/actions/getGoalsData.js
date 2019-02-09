import API from '../utils/API';

import { GET_GOALSDATA } from './types';

const getGoalsData = () => async (dispatch) => {
  const items = await API.getGoalsData();
  dispatch({
    type: GET_GOALSDATA,
    payload: items,
  });
};

export default getGoalsData;
