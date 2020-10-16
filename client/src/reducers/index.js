import { combineReducers } from 'redux';

import productsListReducers from './productsListReducers';
import productsReducers from './productReducer';

export default combineReducers({
  productsList: productsListReducers,
  productDetails : productsReducers,
});
