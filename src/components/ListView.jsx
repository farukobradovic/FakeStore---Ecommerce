import React from "react";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";

const ListView = () => {
  const { filtered_products: products } = useFilterContext();
  return (
    <div className='list'>
      {products.map((product) => {
        return (
          <div className='card2' key={product.id}>
            <div className='img'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='infos'>
              <h2 style={{ lineHeight: "1.1" }}>{product.title}</h2>
              <p className='price'>${product.price}</p>
              <p>{product.description.substring(0, 120)}...</p>
              <Link to={`/products/${product.id}`}>Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
