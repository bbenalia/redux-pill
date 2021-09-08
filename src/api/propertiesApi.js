import { BASE_URL } from "../constants/routes";

const axios = require("axios").default;

export function makeProductsApi() {
  return axios.create({
    baseURL: `${BASE_URL}`,
  });
}

export async function getAllProducts(api = makeProductsApi()) {
  return api.get(`/properties`);
}

// const getProperties = () => {
//   const config = {
//     method: "get",
//     url: "http://localhost:3000/properties",
//     headers: {},
//   };

//   axios(config)
//     .then((response) => {
//       const properties = [response.data];
//       console.log(properties);
//       return properties;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
