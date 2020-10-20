import {
  USER_REGISTER_REQUEST_START,
  USER_REGISTER_REQUEST_SUCCESS,
  USER_REGISTER_REQUEST_FAILURE,
} from '../actions/types/userTypes';

const initialState = { loading: false, error: null, userInfo: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER_REQUEST_START:
      return { ...state, loading: true, userInfo: null };

    case USER_REGISTER_REQUEST_SUCCESS:
      return { ...state, loading: false, userInfo: payload };

    case USER_REGISTER_REQUEST_FAILURE:
      return { ...state, loading: false, error: payload, userInfo: null };

    default:
      return state;
  }
};
