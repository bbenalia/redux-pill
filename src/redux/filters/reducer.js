import INITIAL_STATE from "./state";
import {
  FILTER_BY_HOME,
  LOADING_FILTER_DATA,
  ERROR_FILTER_DATA,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_HOME:
      return { ...state, status: "ok", typeOfHome: action.payload };

    case LOADING_FILTER_DATA:
      return { ...state, status: "loading" };

    case ERROR_FILTER_DATA:
      return { ...state, status: "error" };

    default:
      return state;
  }
};

export default reducer;
