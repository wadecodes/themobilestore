import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCT_START,
} from '../actions/types/productTypes';

import {
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductSuccess,
  fetchProductFailure,
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
  yield takeLatest(FETCH_PRODUCTS_START, fetchProductsAsync);
}

export function* fetchProductAsync({ payload }) {
  try {
    const { data } = yield axios.get(`/api/products/${payload}`);
    yield put(fetchProductSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    yield put(fetchProductFailure(errorMessage));
  }
}

export function* fetchProductStart() {
  yield takeLatest(FETCH_PRODUCT_START, fetchProductAsync);
}

export default function* productSagas() {
  yield all([call(fetchProductsStart), call(fetchProductStart)]);
}
