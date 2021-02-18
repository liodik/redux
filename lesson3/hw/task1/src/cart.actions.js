export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'CART/REMOVE_PRODUCT';

export const addProduct = productData => {
  return {
    type: ADD_PRODUCT,
    payload: {
      productData,
    },
  };
};
export const removeProduct = id => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id,
    },
  };
};
