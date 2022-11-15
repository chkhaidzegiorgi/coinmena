import { fetchCoins } from "src/core";
import { CointListQuery, ICoin } from "src/types";
import { StoreSlice } from "..";

export interface CoinSlice {
  coins: ICoin[];
  filter: CointListQuery;
  fetchCoins: () => void;
}

const createCoinsSlice: StoreSlice<CoinSlice> = (set, get) => ({
  coins: [],
  filter: {
    page: 1,
    per_page: 10,
    order: "market_cap_desc",
    vs_currency: "usd",
    sparkline: false,
  },
  fetchCoins: async () => {
    const filter = get().filter;
    const coins = await fetchCoins(filter);

    set({ coins });
  },
});

export default createCoinsSlice;
