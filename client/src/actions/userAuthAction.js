import {
  USER_LOGIN_REQUEST_FAILURE,
  USER_LOGIN_REQUEST_START,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_REQUEST_FAILURE,
  USER_REGISTER_REQUEST_START,
  USER_REGISTER_REQUEST_SUCCESS,
  USER_PROFILE_REQUEST_START
} from './types/userTypes';

export const loginUserStart = (email, password) => {
  return {
    type: USER_LOGIN_REQUEST_START,
    payload: { email, password },
  };
};

export const getUserProfileStart = (token) => {
  return {
    type: USER_PROFILE_REQUEST_START,
    payload: token,
  };
};

export const loginUserSuccess = (userInfo) => {
  return {
    type: USER_LOGIN_REQUEST_SUCCESS,
    payload: userInfo,
  };
};

export const loginUserFailure = (errorMessage) => {
  return {
    type: USER_LOGIN_REQUEST_FAILURE,
    payload: errorMessage,
  };
};

export const logoutUser = () => {
  return {
    type: USER_LOGOUT_REQUEST,
  };
};

export const registerUserStart = (email, password, name) => {
  return {
    type: USER_REGISTER_REQUEST_START,
    payload: { email, password, name },
  };
};

export const registerUserSuccess = (userInfo) => {
  return {
    type: USER_REGISTER_REQUEST_SUCCESS,
    payload: userInfo,
  };
};

export const registerUserFailure = (errorMessage) => {
  return {
    type: USER_REGISTER_REQUEST_FAILURE,
    payload: errorMessage,
  };
};
