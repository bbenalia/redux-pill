import { BASE_URL, USERS } from "../constants/routes";

const axios = require("axios").default;

export function makeUserApi() {
  return axios.create({
    baseURL: `${BASE_URL}`,
  });
}

export async function getUser(email, pass, api = makeUserApi()) {
  return api.post(`${USERS}?email=${email}&password=${pass}`);
}
