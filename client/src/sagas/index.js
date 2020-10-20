import { all, call } from 'redux-saga/effects';

import productSagas from './productSagas';
import cartSagas from './cartSagas';
import userAuthSagas from './userAuthSagas';

export default function* rootSaga() {
  yield all([call(productSagas), call(cartSagas), call(userAuthSagas)]);
}
