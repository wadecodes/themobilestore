import { all, call } from 'redux-saga/effects';

import { fetchProductsStart } from './productSagas';

export default function* rootSaga() {
  yield all([call(fetchProductsStart)]);
}
