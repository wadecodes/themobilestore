import {
  CART_ADD_ITEM_START,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAILURE,
  CART_REMOVE_ITEM,
} from '../actions/types/cartTypes';

import { addItemToCart, clearItemFromCart } from './utils/cartUtils';

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM_START:
      return { ...state, loading: true };
    case CART_ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: addItemToCart(state.cartItems, payload),
      };

    case CART_ADD_ITEM_FAILURE:
      return { ...state, loading: false, error: payload };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        loading: false,
        cartItems: clearItemFromCart(state.cartItems, payload),
      };

    default:
      return state;
  }
};
