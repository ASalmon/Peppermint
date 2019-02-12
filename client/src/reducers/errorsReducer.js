import {
  GET_LOGINERRORS,
  GET_REGISTRATIONERRORS,
} from '../actions/types';

const initialState = {
  login: {},
  registration: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGINERRORS:
      return {
        ...state,
        login: action.payload,
      };
    case GET_REGISTRATIONERRORS:
      return {
        ...state,
        registration: action.payload,
      };
    default:
      return state;
  }
};
