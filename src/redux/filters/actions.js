import { getProductsBySearch } from "../../api/propertiesApi";

import {
  FILTER_BY_SEARCH,
  LOADING_FILTER_DATA,
  ERROR_FILTER_DATA,
} from "./types";

export const fetchBySearch = (search) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_FILTER_DATA });
    try {
      const apiResult = await getProductsBySearch(search);
      dispatch({ type: FILTER_BY_SEARCH, payload: apiResult.data });
    } catch (error) {
      dispatch({ type: ERROR_FILTER_DATA });
    }
  };
};
