import {
  GET_TOPSELLINGITEMSBYPRICE,
  GET_TOPSELLINGITEMSBYQUANTITY,
  GET_TOPPERFORMINGSTORES,
  GET_SALESDISTRIBUTIONBYSTORE,
  GET_YEARLYPERFORMANCE,
} from '../actions/types';

const initialState = {
  topPerformingStores: [],
  topSellingItemsByPrice: [],
  topSellingItemsByQuantity: [],
  salesDistribution: {
    labels: [],
    series: [],
  },
  yearlyPerformance: {
    xaxis: [],
    lineSeries: {},
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOPSELLINGITEMSBYPRICE:
      return {
        ...state,
        topSellingItemsByPrice: action.payload,
      };
    case GET_TOPSELLINGITEMSBYQUANTITY:
      return {
        ...state,
        topSellingItemsByQuantity: action.payload,
      };
    case GET_TOPPERFORMINGSTORES:
      return {
        ...state,
        topPerformingStores: action.payload,
      };
    case GET_SALESDISTRIBUTIONBYSTORE:
      return {
        ...state,
        salesDistribution: action.payload,
      };
    case GET_YEARLYPERFORMANCE:
      return {
        ...state,
        yearlyPerformance: action.payload,
      };
    default:
      return state;
  }
}
