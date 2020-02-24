import axios from "axios";
const BASE_URL = "https://debloggery.com/be/api";

export function getRecipes() {
  return axios.get(`${BASE_URL}/recipes`);
}
