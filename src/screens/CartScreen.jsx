import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCartContext } from "../context/cart_context";
import { Helmet } from "react-helmet";

const CartScreen = () => {
  const { user } = useAuth0();
  const { cart, totalAmount, shippingFee, clearCart } = useCartContext();
  if (cart.length === 0) {
    return (
      <div className='container' style={{ paddingBottom: "70rem" }}>
        <Helmet>
          <title>FakeStore | Cart</title>
        </Helmet>
        <h3 style={{}}>
          Cart is empty, continue shopping{" "}
          <Link to='/' className='button-back' style={{ marginLeft: "1rem" }}>
            here
          </Link>
        </h3>
      </div>
    );
  }
  return (
    <div className='container'>
      <Helmet>
        <title>FakeStore | Cart</title>
      </Helmet>
      <div className='cart' style={{ marginBottom: "10rem" }}>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </tbody>
        </table>
        <div className='buttons'>
          <Link to='/'>Continue Shopping</Link>
          <button type='button' onClick={clearCart}>
            Clear Shopping Cart
          </button>
        </div>
        <div className='bucket-flex'>
          <div className='bucket'>
            <h4>
              Subtotal: <span>${totalAmount.toFixed(2)}</span>
            </h4>
            <p>
              Shipping Fee: <span>${shippingFee}</span>
            </p>
            <h2>
              Order Total:{" "}
              <span>${(totalAmount + shippingFee).toFixed(2)}</span>
            </h2>
            {user ? (
              <Link to='/checkout'>Proceed to checkout</Link>
            ) : (
              <h4>You need to be logged in to confirm order.</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
