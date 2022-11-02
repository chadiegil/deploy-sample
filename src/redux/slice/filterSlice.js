import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
      const { products, search } = action.payload;
      const tempProducts = products.filter(
        (products) =>
          products.name.toLowerCase().includes(search.toLowerCase()) ||
          products.category.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredProducts = tempProducts;
    },
    SORT_PRODUCT(state, action) {
      const { products, sort } = action.payload;
      let tempProducts = [];
      switch (sort) {
        case "latest":
          tempProducts = products;
          return;
        case "lowest-price":
          tempProducts = products.slice().sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "highest-price":
          tempProducts = products.slice().sort((a, b) => {
            return b.price - a.price;
          });
          break;

        case "a-z":
          tempProducts = products.slice().sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;

        case "z-a":
          tempProducts = products.slice().sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;

        default:
          break;
      }

      state.filteredProducts = tempProducts;
    },
    FILTER_BY_CATEGORY(state, action) {
      const { products, category } = action.payload;
      let tempProducts = [];
      if (category === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category === category
        );
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_BRAND(state, action) {
      const { products, brand } = action.payload;
      let tempProducts = [];
      if (brand === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter((product) => product.brand === brand);
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_PRICE(state, action) {
      const { products, price } = action.payload;
      let tempProducts = [];
      tempProducts = products.filter((product) => product.price <= price);
      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  FILTER_BY_SEARCH,
  SORT_PRODUCT,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
} = filterSlice.actions;
export const selectFilteredProduct = (state) => state.filter.filteredProducts;
export default filterSlice.reducer;
