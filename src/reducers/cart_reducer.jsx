import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_TOTAL_AMOUNT,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { product, amount, id } = action.payload;
    let found = false;
    const temp = state.cart.map((item) => {
      if (item.id === id) {
        found = true;
        return { ...item, amount: amount };
      } else {
        return item;
      }
    });
    if (found) {
      return { ...state, cart: temp };
    }
    const item = {
      id: id,
      image: product.image,
      amount: amount,
      price: product.price,
    };
    return { ...state, cart: [...state.cart, item] };
  }
  if (action.type === REMOVE_FROM_CART) {
    let cart = state.cart.filter((product) => product.id !== action.payload);
    return { ...state, cart: cart };
  }
  if (action.type === INCREASE_QUANTITY) {
    const { id, quantity } = action.payload;
    const temp = state.cart.map((item) => {
      if (item.id === id) {
        let newQuantity = quantity + 1;
        return { ...item, amount: newQuantity };
      } else {
        return item;
      }
    });
    return { ...state, cart: temp };
  }
  if (action.type === DECREASE_QUANTITY) {
    const { id, quantity } = action.payload;
    const temp = state.cart.map((item) => {
      if (item.id === id) {
        let newQuantity = quantity - 1;
        if (newQuantity <= 1) {
          newQuantity = 1;
        }
        return { ...item, amount: newQuantity };
      } else {
        return item;
      }
    });
    return { ...state, cart: temp };
  }
  if (action.type === COUNT_TOTAL_AMOUNT) {
    const { totalAmount } = state.cart.reduce(
      (total, item) => {
        total.totalAmount += item.price * item.amount;
        return total;
      },
      { totalAmount: 0 }
    );

    return { ...state, totalAmount };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
};

export default cart_reducer;
