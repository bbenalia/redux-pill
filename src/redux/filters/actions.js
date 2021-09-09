import { getProductsBySearch } from "../../api/propertiesApi";

import {
  FILTER_BY_HOME,
  FILTER_BY_PRICE,
  FILTER_BY_CONDITION,
  FILTER_BY_SEARCH,
  LOADING_FILTER_DATA,
  ERROR_FILTER_DATA,
} from "./types";

export const setCheckboxFilters = (data, filterType) => {
  if (filterType === "type")
    return {
      type: FILTER_BY_HOME,
      payload: data,
    };

  if (filterType === "consition")
    return {
      type: FILTER_BY_CONDITION,
      payload: data,
    };

  return { type: ERROR_FILTER_DATA };
};

export const filterBySearch = (search) => ({
  type: FILTER_BY_SEARCH,
  payload: search,
});

export const setPriceFilter = (priceFilter) => ({
  type: FILTER_BY_PRICE,
  payload: priceFilter,
});

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
