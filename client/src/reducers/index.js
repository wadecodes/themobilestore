import { combineReducers } from 'redux';

import productsListReducers from './productsListReducers';

export default combineReducers({ productsList: productsListReducers });
