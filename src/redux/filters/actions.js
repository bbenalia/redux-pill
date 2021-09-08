// import getRandom from '../../services/randomMock';
// import { getAllProducts } from "../../api/propertiesApi";

import {
  FILTER_BY_HOME,
  //   LOADING_FILTER_DATA,
  //   ERROR_FILTER_DATA,
} from "./types";

export const setHomeFilter = (homeFilter) => ({
  type: FILTER_BY_HOME,
  payload: homeFilter,
});
