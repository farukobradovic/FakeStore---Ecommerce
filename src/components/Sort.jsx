import React from "react";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const {
    grid_view,
    setGridView,
    setListView,
    filtered_products: products,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <div className='sorting'>
      <div className='view'>
        <button
          type='button'
          className={grid_view ? "active-view" : null}
          onClick={() => setGridView()}
        >
          <i className='fas fa-th-large'></i>
        </button>
        <button
          className={grid_view ? null : "active-view"}
          type='button'
          onClick={() => setListView()}
        >
          <i className='fas fa-list'></i>
        </button>
      </div>
      <p>{products.length} Products Found</p>

      <div className='sortby'>
        <p>Sort By</p>
        <select name='sort' value={sort} onChange={updateSort}>
          <option value='lowest'>Price(Lowest)</option>
          <option value='highest'>Price(Highest)</option>
          <option value='A-Z'>Name(A-Z)</option>
          <option value='Z-A'>Name(Z-A)</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
