import {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from './types/productTypes';

export const fetchProductsStart = () => {
  return {
    type: PRODUCT_LIST_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: PRODUCT_LIST_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (errorMessage) => {
  return {
    type: PRODUCT_LIST_FAILURE,
    payload: errorMessage,
  };
};
