import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../actions/types/productTypes';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_START:
      return { ...state, products: [], loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: payload };
    case FETCH_PRODUCTS_FAILURE:
      return { loading: false, products: [], error: payload };
    default:
      return state;
  }
};
