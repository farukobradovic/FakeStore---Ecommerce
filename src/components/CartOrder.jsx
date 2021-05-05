import React from "react";

const CartOrder = ({ amount, increase, decrease }) => {
  return (
    <div className='toggle'>
      <button type='button' onClick={increase}>
        <i className='fas fa-plus'></i>
      </button>
      <h2>{amount}</h2>
      <button type='button' onClick={decrease}>
        <i className='fas fa-minus'></i>
      </button>
    </div>
  );
};

export default CartOrder;
