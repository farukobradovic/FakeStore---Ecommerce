import React from "react";
import { useFilterContext } from "../context/filter_context";

const Filters = () => {
  const { filters, updateFilters, filtersClear } = useFilterContext();
  const { text, category, price, max_price } = filters;
  return (
    <div className='filters'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='input-search'>
          <input
            type='text'
            placeholder='Search'
            name='text'
            value={text}
            onChange={updateFilters}
          />
        </div>
        <div className='categories'>
          <h3>Category</h3>
          <button
            type='button'
            className={
              category === "all"
                ? "button-category active-category"
                : "button-category"
            }
            name='category'
            value='all'
            onClick={updateFilters}
          >
            All
          </button>
          <button
            type='button'
            className={
              category === "electronics"
                ? "button-category active-category"
                : "button-category"
            }
            name='category'
            value='electronics'
            onClick={updateFilters}
          >
            Electronics
          </button>
          <button
            type='button'
            className={
              category === "jewelery"
                ? "button-category active-category"
                : "button-category"
            }
            name='category'
            value='jewelery'
            onClick={updateFilters}
          >
            Jewelery
          </button>
          <button
            type='button'
            className={
              category === "men's clothing"
                ? "button-category active-category"
                : "button-category"
            }
            name='category'
            value="men's clothing"
            onClick={updateFilters}
          >
            Men's clothing
          </button>
          <button
            type='button'
            className={
              category === "women's clothing"
                ? "button-category active-category"
                : "button-category"
            }
            name='category'
            value="women's clothing"
            onClick={updateFilters}
          >
            Women's clothing
          </button>
        </div>
        <div className='price'>
          <h3>Price</h3>
          <p>{price} $</p>
          <input
            type='range'
            className='range-input'
            min='0'
            max={max_price}
            value={price}
            name='price'
            onChange={updateFilters}
          />
        </div>
        <button type='button' className='button-clear' onClick={filtersClear}>
          Clear Filters
        </button>
      </form>
    </div>
  );
};

export default Filters;
