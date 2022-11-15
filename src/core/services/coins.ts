import { CointListQuery, ICoin } from "src/types";
import { httpClient } from "./http-client";

export async function fetchCoins(filter: CointListQuery): Promise<ICoin[]> {
  const response = await httpClient.get<ICoin[]>("/coins/markets", {
    params: filter,
  });
  return response.data;
}
