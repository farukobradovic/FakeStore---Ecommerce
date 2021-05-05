import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CartOrder from "../components/CartOrder";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";
import Spinner from "../spinner/Spinner";

const SingleProduct = () => {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  const {
    singleProduct,
    singleProductLoading,
    singleProductError,
    fetchSingleProduct,
  } = useProductsContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);
  const { price, title, description, image } = singleProduct;

  const amountPlus = () => {
    setAmount((curr) => {
      return curr + 1;
    });
  };

  const amountMinus = () => {
    setAmount((curr) => {
      let temp = curr - 1;
      if (temp >= 1) return temp;
      return 1;
    });
  };

  if (singleProductLoading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <Helmet>
        <title>{`FakeStore | ${title}`}</title>
      </Helmet>
      <Link to='/' className='button-back'>
        back to products
      </Link>
      <div className='product'>
        <div className='img'>
          <img src={image} alt={title} />
        </div>
        <div className='desc'>
          <h1 style={{ lineHeight: "1.1" }}>{title}</h1>
          <p className='price'>${price}</p>
          <p>{description}</p>
          <CartOrder
            amount={amount}
            increase={amountPlus}
            decrease={amountMinus}
          />
          <Link
            style={{ textDecoration: "none" }}
            to='/cart'
            className='button-buy'
            type='button'
            onClick={() => addToCart(singleProduct.id, singleProduct, amount)} //mora se id poslat ne moze u sklopu prodct objekta
          >
            add to chart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
