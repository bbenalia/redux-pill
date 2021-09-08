import { BASE_URL, PROPERTIES } from "../constants/routes";
import { getFilterParams } from "../helpers/filterParams";

const axios = require("axios").default;

export function makeProductsApi() {
  return axios.create({
    baseURL: `${BASE_URL}`,
  });
}

export async function getAllProducts(api = makeProductsApi()) {
  return api.get(`${PROPERTIES}`);
}

export async function getProductsBySearch(search, api = makeProductsApi()) {
  return api.get(`${PROPERTIES}q=${search}`);
}

export async function getProductsByFilters(filters, api = makeProductsApi()) {
  const queryParams = getFilterParams(filters);
  return api.get(`${PROPERTIES}?${queryParams}`);
}
