import React from "react";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";

const GridView = () => {
  const { filtered_products: products } = useFilterContext();

  return (
    <div className='grid'>
      {products.map((product) => {
        return (
          <div className='card' key={product.id}>
            <div className='img'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='infos'>
              <Link to={`/products/${product.id}`}>
                {product.title.substring(0, 20)}...
              </Link>
              <p>${product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
