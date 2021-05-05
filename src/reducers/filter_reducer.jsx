import {
  FILTER_CLEAR,
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    let temp = [...state.filtered_products];
    if (state.sort === "lowest") {
      temp = temp.sort((a, b) => a.price - b.price);
    }
    if (state.sort === "highest") {
      temp = temp.sort((a, b) => b.price - a.price);
    }
    if (state.sort === "A-Z") {
      temp = temp.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (state.sort === "Z-A") {
      temp = temp.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    return { ...state, filtered_products: temp };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    //Uvijek radimo sa cijelim nizom
    let { all_products, filters } = state;
    let { text, category, price } = filters;
    let temp = [...all_products];

    if (text) {
      temp = temp.filter((product) => {
        return product.title.toLowerCase().includes(text);
      });
    }
    if (category !== "all") {
      temp = temp.filter((product) => {
        return product.category === category;
      });
    }

    temp = temp.filter((product) => product.price <= price);

    return { ...state, filtered_products: temp };
  }
  if (action.type === FILTER_CLEAR) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        category: "all",
        price: state.filters.max_price,
      },
    };
  }
};

export default filter_reducer;
