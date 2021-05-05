import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import CartOrder from "./CartOrder";

const CartItem = ({ item }) => {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartContext();
  const [amount, setAmount] = useState(item.amount);
  const increase = () => {
    setAmount((curr) => {
      return curr + 1;
    });
    increaseQuantity(item.id, amount);
  };

  const decrease = () => {
    setAmount((curr) => {
      let temp = curr - 1;
      if (temp >= 1) return temp;
      return 1;
    });
    decreaseQuantity(item.id, amount);
  };
  return (
    <>
      <tr>
        <td>
          <div className='img'>
            <img src={item.image} alt='item-img' />
          </div>
        </td>
        <td>
          <p className='price'>${item.price}</p>
        </td>
        <td>
          <CartOrder amount={amount} increase={increase} decrease={decrease} />
        </td>
        <td>${(item.price * amount).toFixed(2)}</td>
        <td>
          <button
            type='button'
            className='delete'
            onClick={() => removeFromCart(item.id)}
          >
            <i className='fas fa-trash'></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
