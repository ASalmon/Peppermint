import { GET_TOPSELLINGITEMSBYAMOUT } from '../actions/types';

let id = 0;

function createData(city, sales) {
  id += 1;
  return { id, city, sales };
}

const rows = [
  createData('New York', 68000),
  createData('Atlanta', 54000),
  createData('Austin', 38000),
  createData('Denver', 31000),
];

const initialState = {
  companyName: '',
  stores: [],
  departments: [],
  topSellingItemsByAmount: rows,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOPSELLINGITEMSBYAMOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
