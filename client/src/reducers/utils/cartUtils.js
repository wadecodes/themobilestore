export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem._id === cartItemToAdd._id ? cartItemToAdd : cartItem;
    });
  } else {
    return [...cartItems, cartItemToAdd];
  }
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem._id !== cartItemToClear);
};
