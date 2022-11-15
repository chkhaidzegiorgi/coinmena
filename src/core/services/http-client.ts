import Axios from "axios";
import { EnvVariables } from "src/environment/environment";

export const httpClient = Axios.create({
  baseURL: EnvVariables.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
