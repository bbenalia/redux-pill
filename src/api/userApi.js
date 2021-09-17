import { BASE_URL, USERS, REGISTER } from "../constants/routes";

const axios = require("axios").default;

export function makeUserApi() {
  return axios.create({
    baseURL: `${BASE_URL}`,
  });
}

export async function getUser(email, pass, api = makeUserApi()) {
  return api.post(`${USERS}?email=${email}&password=${pass}`);
}

export async function postUser(
  name,
  email,
  pass,
  confPass,
  api = makeUserApi(),
) {
  return api.post(
    `${REGISTER}?email=${email}&name=${name}&password=${pass}&confirm_password=${confPass}`,
  );
}
