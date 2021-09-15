import { combineReducers } from "redux";
import products from "./products/reducer";
import filters from "./filters/reducer";
import users from "./auth/reducer";

const reducers = combineReducers({
  products,
  filters,
  users,
});

export default reducers;
