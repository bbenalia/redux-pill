import INITIAL_STATE from "./state";

import { LOADING_USER, ERROR_USER, LOGIN, LOGOUT } from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        status: "ok",
        user: action.payload,
        isAuthenticated: true,
      };
    }
    case LOADING_USER:
      return { ...state, status: "loading" };

    case ERROR_USER:
      return { ...state, status: "error" };

    case LOGOUT: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default reducer;