import { getAllProducts } from "../../api/propertiesApi";

import { ERROR_PRODUCTS, FETCH_PRODUCTS, LOADING_PRODUCTS } from "./types";

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
