import { getProductsBySearch } from "../../api/propertiesApi";

import {
  FILTER_BY_HOME,
  FILTER_BY_PRICE,
  FILTER_BY_SEARCH,
  FILTER_BY_ROOM,
  LOADING_FILTER_DATA,
  ERROR_FILTER_DATA,
} from "./types";

export const setHomeFilter = (homeFilter) => ({
  type: FILTER_BY_HOME,
  payload: homeFilter,
});

export const filterBySearch = (search) => ({
  type: FILTER_BY_SEARCH,
  payload: search,
});

export const setRoomFilter = (room) => ({
  type: FILTER_BY_ROOM,
  payload: room,
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
