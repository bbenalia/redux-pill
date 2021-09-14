import { getAllProducts, getProductsByFilters } from "../../api/propertiesApi";

import {
  ERROR_PRODUCTS,
  FETCH_PRODUCTS,
  LOADING_PRODUCTS,
  SET_PRODUCTS,
} from "./types";

export const setFilteredProducts = (filters) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_PRODUCTS });

    try {
      const apiResult = await getProductsByFilters(filters);
      const { data } = apiResult.data;
      dispatch({ type: SET_PRODUCTS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCTS });
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_PRODUCTS });

    try {
      const apiResult = await getAllProducts();
      dispatch({ type: FETCH_PRODUCTS, payload: apiResult.data });
    } catch (error) {
      dispatch({ type: ERROR_PRODUCTS });
    }
  };
};
