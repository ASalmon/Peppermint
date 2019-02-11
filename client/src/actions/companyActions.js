import API from '../utils/API';

import {
  GET_GOALSDATA,
  GET_SALESDISTRIBUTIONBYSTORE,
  GET_TOPPERFORMINGSTORES,
  GET_TOPSELLINGITEMSBYPRICE,
  GET_TOPSELLINGITEMSBYQUANTITY,
  GET_YEARLYPERFORMANCE,
} from './types';

export const getGoalsData = () => async (dispatch) => {
  const items = await API.getGoalsData();
  dispatch({
    type: GET_GOALSDATA,
    payload: items,
  });
};

export const getSalesDistributionByStore = () => async (dispatch) => {
  const stores = await API.getSalesDistributionByStore();
  dispatch({
    type: GET_SALESDISTRIBUTIONBYSTORE,
    payload: stores,
  });
};

export const getTopPerformingStores = () => async (dispatch) => {
  const stores = await API.getTopPerformingStores();
  dispatch({
    type: GET_TOPPERFORMINGSTORES,
    payload: stores,
  });
};

export const getTopSellingItemsByPrice = () => async (dispatch) => {
  const items = await API.getTopSellingItemsByPrice();
  dispatch({
    type: GET_TOPSELLINGITEMSBYPRICE,
    payload: items,
  });
};

export const getTopSellingItemsByQuantity = () => async (dispatch) => {
  const items = await API.getTopSellingItemsByQuantity();
  dispatch({
    type: GET_TOPSELLINGITEMSBYQUANTITY,
    payload: items,
  });
};

export const getYearlyPerformance = () => async (dispatch) => {
  const items = await API.getYearlyPerformance();
  dispatch({
    type: GET_YEARLYPERFORMANCE,
    payload: items,
  });
};
