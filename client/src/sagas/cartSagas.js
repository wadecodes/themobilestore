import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { CART_ADD_ITEM_START } from '../actions/types/cartTypes';

import {
  addItemToCartSuccess,
  addItemToCartFailure,
} from '../actions/cartAction';

function* fetchProductDetailsAsync({ payload: { productId, qty } }) {
  try {
    const { data } = yield axios.get(`/api/products/${productId}`);
    const productDetails = {
      _id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
    };
    yield put(addItemToCartSuccess({ ...productDetails, qty }));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    yield put(addItemToCartFailure(errorMessage));
  }
}

function* fetchProductDetailsStart() {
  yield takeLatest(CART_ADD_ITEM_START, fetchProductDetailsAsync);
}

export default function* cartSagas() {
  yield all([call(fetchProductDetailsStart)]);
}
