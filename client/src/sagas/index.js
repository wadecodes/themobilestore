import { all, call } from 'redux-saga/effects';

import { productSagas } from './productSagas';

export default function* rootSaga() {
  yield all([call(productSagas)]);
}
