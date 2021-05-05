import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import StripeCheckout from "../components/StripeCheckout";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";

const CheckoutScreen = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className='container' style={{ paddingBottom: "70rem" }}>
        <Helmet>
          <title>FakeStore | Checkout</title>
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
    <Wrapper>
      <StripeCheckout />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutScreen;
