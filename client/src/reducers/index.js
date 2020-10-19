import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsListReducer from './productsListReducer';
import productsReducer from './productReducer';
import cartReducer from './cartReducer';

const persistConfig = {
  key: 'themobilestore',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  productsList: productsListReducer,
  productDetails: productsReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
