import { all, call } from 'redux-saga/effects';

import { productSagas } from './productSagas';
import { cartSagas } from './cartSagas';

export default function* rootSaga() {
  yield all([call(productSagas), call(cartSagas)]);
}
