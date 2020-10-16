import {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../actions/types/productTypes';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, products: [], loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: payload };
    case PRODUCT_LIST_FAILURE:
      return { loading: false, products: [], error: payload };
    default:
      return state;
  }
};
