import { LOADING_USER, ERROR_USER, LOGIN, LOGOUT, SIGN_UP } from "./types";

import { getUser, postUser } from "../../api/userApi";

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

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const createUser = (name, email, pass, confPass) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_USER });

    try {
      const userCreated = await postUser(name, email, pass, confPass);
      const { data } = userCreated.data;
      dispatch({ type: SIGN_UP, payload: data });
    } catch (error) {
      dispatch({ type: ERROR_USER });
    }
  };
};
