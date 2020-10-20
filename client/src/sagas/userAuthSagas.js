import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  loginUserSuccess,
  loginUserFailure,
  registerUserSuccess,
  registerUserFailure,
} from '../actions/userAuthAction';

import {
  USER_LOGIN_REQUEST_START,
  USER_REGISTER_REQUEST_START,
  USER_PROFILE_REQUEST_START,
} from '../actions/types/userTypes';

function* loginUserAsync({ payload: { email, password } }) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = yield axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    yield put(loginUserSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    yield put(loginUserFailure(errorMessage));
  }
}

function* loginUserStart() {
  yield takeLatest(USER_LOGIN_REQUEST_START, loginUserAsync);
}

function* getUserProfileAsync({ payload }) {
  try {
    const { data } = yield axios.get('/api/users/profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload}`,
      },
    });
    yield put(loginUserSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    yield put(loginUserFailure(errorMessage));
  }
}

function* getUserProfile() {
  yield takeLatest(USER_PROFILE_REQUEST_START, getUserProfileAsync);
}

function* registerUserAsync({ payload: { name, email, password } }) {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = yield axios.post(
      '/api/users/',
      { email, password, name },
      config
    );
    yield;
    yield put(registerUserSuccess(data));
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    yield put(registerUserFailure(errorMessage));
  }
}

function* registerUserStart() {
  yield takeLatest(USER_REGISTER_REQUEST_START, registerUserAsync);
}

export default function* userAuthSagas() {
  yield all([
    call(loginUserStart),
    call(registerUserStart),
    call(getUserProfile),
  ]);
}
