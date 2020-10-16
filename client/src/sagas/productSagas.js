import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import { PRODUCT_LIST_REQUEST } from '../actions/types/productTypes';

import {
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../actions/productAction';

export function* fetchProductsAsync() {
  try {
    const { data } = yield axios.get('/api/products');
    yield put(fetchProductsSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    yield put(fetchProductsFailure(errorMessage));
  }
}

export function* fetchProductsStart() {
  yield takeLatest(PRODUCT_LIST_REQUEST, fetchProductsAsync);
}
