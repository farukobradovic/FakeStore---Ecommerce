import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  COUNT_TOTAL_AMOUNT,
  DECREASE_QUANTITY,
  CLEAR_CART,
} from "../actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  }
  return [];
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 9.99,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, product, amount) => {
    dispatch({ type: ADD_TO_CART, payload: { id, product, amount } });
  };
  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };
  const increaseQuantity = (id, quantity) => {
    dispatch({ type: INCREASE_QUANTITY, payload: { id, quantity } });
  };
  const decreaseQuantity = (id, quantity) => {
    dispatch({ type: DECREASE_QUANTITY, payload: { id, quantity } });
  };
  const countTotalAmount = () => {
    dispatch({ type: COUNT_TOTAL_AMOUNT });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    countTotalAmount();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        increaseQuantity,
        countTotalAmount,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
