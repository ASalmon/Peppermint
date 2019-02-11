import { combineReducers } from 'redux';
import companyData from './companyDataReducer';
import authentication from './authReducer';
import errors from './errorsReducer';

export default combineReducers({
  companyData,
  authentication,
  errors,
});
