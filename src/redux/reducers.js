import { combineReducers } from "redux";
import products from "./products/reducer";
import filters from "./filters/reducer";

const reducers = combineReducers({
  products,
  filters,
});

export default reducers;
