import {
  USER_LOGIN_REQUEST_FAILURE,
  USER_LOGIN_REQUEST_START,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_PROFILE_REQUEST_START,
} from '../actions/types/userTypes';

const initialState = {
  loading: false,
  error: null,
  userInfo: {},
  loggedIn: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST_START:
      return { ...state, loading: true, userInfo: {}, loggedIn: false };
    case USER_LOGIN_REQUEST_SUCCESS:
      return { ...state, loading: false, userInfo: payload, loggedIn: true };

    case USER_LOGIN_REQUEST_FAILURE:
      return {
        loading: false,
        userInfo: null,
        error: payload,
        loggedIn: false,
      };

    case USER_LOGOUT_REQUEST:
      return initialState;

    default:
      return state;
  }
};
