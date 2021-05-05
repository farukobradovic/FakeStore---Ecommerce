import React, { useEffect } from "react";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import Spinner from "../spinner/Spinner";
import GridView from "./GridView";
import ListView from "./ListView";

import Sort from "./Sort";

const Products = () => {
  const { grid_view, filtered_products } = useFilterContext();
  const {
    fetchProducts,
    products,
    productsLoading,
    productsError,
  } = useProductsContext();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  if (productsLoading) {
    return (
      <div className='products'>
        <Sort />
        <Spinner />
      </div>
    );
  }

  if (filtered_products.length === 0) {
    return (
      <div className='products'>
        <Sort />
        <h3 style={{ marginTop: "3rem" }}>
          {" "}
          Sorry, no product matched your search...
        </h3>
      </div>
    );
  }

  return (
    <div className='products' style={{ paddingBottom: "5rem" }}>
      <Sort />
      {grid_view ? <GridView /> : <ListView />}
    </div>
  );
};

export default Products;
