import INITIAL_STATE from "./state";
import {
  FETCH_PRODUCTS,
  LOADING_PRODUCTS,
  ERROR_PRODUCTS,
  SET_PRODUCTS,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      const { data } = action.payload;
      return { ...state, status: "ok", data: data };
    }

    case SET_PRODUCTS:
      return { ...state, status: "ok", data: action.payload };

    case LOADING_PRODUCTS:
      return { ...state, status: "loading" };

    case ERROR_PRODUCTS:
      return { ...state, status: "error" };

    default:
      return state;
  }
};

export default reducer;
