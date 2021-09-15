import { LOADING_USER, ERROR_USER, LOGIN } from "./types";

import { getUser } from "../../api/userApi";

export const login = (email, pass) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_USER });
    try {
      const user = await getUser(email, pass);
      const { data } = user.data;
      dispatch({ type: LOGIN, payload: data });
    } catch (err) {
      dispatch({ type: ERROR_USER });
    }
  };
};
