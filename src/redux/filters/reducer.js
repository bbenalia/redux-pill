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
        filters: { typeOfHome },
      } = state;
      const { filters } = state;

      return {
        ...state,
        status: "ok",
        filters: {
          ...filters,
          typeOfHome: { ...typeOfHome, ...action.payload },
        },
      };
    }

    case FILTER_BY_SEARCH: {
      const { filters } = state;
      return {
        ...state,
        status: "ok",
        filters: { ...filters, search: { q: action.payload } },
      };
    }

    case LOADING_FILTER_DATA:
      return { ...state, status: "loading" };

    case ERROR_FILTER_DATA:
      return { ...state, status: "error" };

    default:
      return state;
  }
};

export default reducer;
