import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {
  GET_ERRORS,
  SET_CURRENT_USER,
} from './types';

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/register', userData)
    .then(() => history.push('/'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/login', userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
      history.push('/dashboard');
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setCurrentUser({}));
};
