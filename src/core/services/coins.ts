import { ICoin } from "src/types";
import { httpClient } from "./http-client";

export async function getMarkets(): Promise<ICoin[]> {
  const response = await httpClient.get<ICoin[]>("/coins/markets");
  return response.data;
}
