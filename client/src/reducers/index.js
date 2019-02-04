import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import companyData from './companyData';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  companyData,
});
