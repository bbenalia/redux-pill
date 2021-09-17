import { getProductsBySearch } from "../../api/propertiesApi";

import {
  FILTER_BY_HOME,
  FILTER_BY_PRICE,
  FILTER_BY_CONDITION,
  FILTER_BY_OTHER,
  FILTER_BY_SEARCH,
  FILTER_BY_ROOM,
  FILTER_BY_BATH,
  FILTER_BY_DATE,
  FILTER_BY_EQUIPMENT,
  SET_FILTER_BY_URL,
  RESET_FILTERS,
  LOADING_FILTER_DATA,
  ERROR_FILTER_DATA,
  FILTER_BY_PAGE,
} from "./types";

export const setCheckboxFilters = (data, filterType) => {
  if (filterType === "type")
    return {
      type: FILTER_BY_HOME,
      payload: data,
    };

  if (filterType === "condition")
    return {
      type: FILTER_BY_CONDITION,
      payload: data,
    };

  if (filterType === "moreFilters")
    return {
      type: FILTER_BY_OTHER,
      payload: data,
    };

  return { type: ERROR_FILTER_DATA };
};

export const setSelectFilters = (data, filterType) => {
  if (filterType === "publication_date")
    return {
      type: FILTER_BY_DATE,
      payload: data,
    };

  if (filterType === "equipment")
    return {
      type: FILTER_BY_EQUIPMENT,
      payload: data,
    };

  return { type: ERROR_FILTER_DATA };
};

export const setButtonsFilters = (data, filterType) => {
  if (filterType === "room")
    return {
      type: FILTER_BY_ROOM,
      payload: data,
    };

  if (filterType === "bath")
    return {
      type: FILTER_BY_BATH,
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

export const setFilterByUrl = (data) => {
  return {
    type: SET_FILTER_BY_URL,
    payload: data,
  };
};

export const setFilterByPage = (page) => {
  return {
    type: FILTER_BY_PAGE,
    payload: page,
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};

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
