import {
  GET_TOPSELLINGITEMSBYPRICE,
  GET_TOPPERFORMINGSTORES,
} from '../actions/types';

const initialState = {
  topPerformingStores: [],
  topSellingItemsByPrice: [],
  topSellingItemsByQuantity: [],
  salesDistribution: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOPSELLINGITEMSBYPRICE:
      return {
        ...state,
        topSellingItemsByPrice: action.payload,
      };
    case GET_TOPPERFORMINGSTORES:
      return {
        ...state,
        topPerformingStores: action.payload,
      };
    default:
      return state;
  }
}
