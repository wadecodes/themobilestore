import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';

import productsListReducer from './productsListReducer';
import productsReducer from './productReducer';
import cartReducer from './cartReducer';
import userAuthReducer from './userAuthReducer';
import userRegisterReducer from './userRegisterReducer';

const encryptor = encryptTransform({
  secretKey: 'super-key',
  onError: function (error) {
    console.log(error);
  },
});

const persistConfig = {
  key: 'themobilestore',
  storage,
  whitelist: ['cart', 'userAuth'],
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  productsList: productsListReducer,
  productDetails: productsReducer,
  cart: cartReducer,
  userAuth: userAuthReducer,
  userRegister: userRegisterReducer,
});

export default persistReducer(persistConfig, rootReducer);
