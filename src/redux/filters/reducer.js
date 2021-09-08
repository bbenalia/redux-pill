import INITIAL_STATE from "./state";
import {
  FILTER_BY_HOME,
  FILTER_BY_SEARCH,
  LOADING_FILTER_DATA,
  ERROR_FILTER_DATA,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BY_HOME: {
      const {
        filters: { type },
      } = state;
      const { filters } = state;

      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          type: { ...type, ...action.payload },
        },
      };
    }

    case FILTER_BY_SEARCH:
      return { ...state, status: "ok", search: action.payload };

    case LOADING_FILTER_DATA:
      return { ...state, status: "loading" };

    case ERROR_FILTER_DATA:
      return { ...state, status: "error" };

    default:
      return state;
  }
};

export default reducer;
