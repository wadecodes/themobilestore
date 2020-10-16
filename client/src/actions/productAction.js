import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from './types/productTypes';

//* Fetching Products List from server : START
export const fetchProductsStart = () => {
  return {
    type: FETCH_PRODUCTS_START,
  };
};

//* Fetching Products List from server : SUCCESS
export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

//* Fetching Products List from server : Failure
export const fetchProductsFailure = (errorMessage) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: errorMessage,
  };
};

//* Fetching Product from server : START
export const fetchProductStart = (id) => {
  return {
    type: FETCH_PRODUCT_START,
    payload: id,
  };
};

//* Fetching Product from server : SUCCESS
export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

//* Fetching Product from server : Failure
export const fetchProductFailure = (errorMessage) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: errorMessage,
  };
};
