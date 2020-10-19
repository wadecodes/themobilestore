import {
  CART_ADD_ITEM_FAILURE,
  CART_ADD_ITEM_START,
  CART_ADD_ITEM_SUCCESS,
  CART_REMOVE_ITEM,
} from './types/cartTypes';

export const addItemToCartStart = (productId, qty) => {
  return {
    type: CART_ADD_ITEM_START,
    payload: { productId, qty },
  };
};

export const addItemToCartSuccess = (product) => {
  return {
    type: CART_ADD_ITEM_SUCCESS,
    payload: product,
  };
};

export const addItemToCartFailure = (errorMessage) => {
  return {
    type: CART_ADD_ITEM_FAILURE,
    payload: errorMessage,
  };
};

export const clearItemFromCart = (productId) => {
  return {
    type: CART_REMOVE_ITEM,
    payload: productId,
  };
};
