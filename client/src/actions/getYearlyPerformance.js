import API from '../utils/API';

import { GET_YEARLYPERFORMANCE } from './types';

const getYearlyPerformance = () => async (dispatch) => {
  const items = await API.getYearlyPerformance();
  dispatch({
    type: GET_YEARLYPERFORMANCE,
    payload: items,
  });
};

export default getYearlyPerformance;
