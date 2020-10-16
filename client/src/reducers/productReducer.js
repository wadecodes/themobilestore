import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from '../actions/types/productTypes';

const initialState = {
  product: { reviews: [] },
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_START:
      return { ...state, product: { reviews: [] }, loading: true };

    case FETCH_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: payload };

    case FETCH_PRODUCT_FAILURE:
      return { product: { reviews: [] }, loading: false, error: payload };

    default:
      return state;
  }
};
