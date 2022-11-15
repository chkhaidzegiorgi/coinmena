import { fetchCoins } from "src/core";
import { CointListQuery, ICoin } from "src/types";
import { StoreSlice } from "..";

export interface CoinSlice {
  coins: ICoin[];
  coinFilter: CointListQuery;
  setCoinFilter: (page: number) => void;
  fetchCoins: () => void;
}

const createCoinsSlice: StoreSlice<CoinSlice> = (set, get) => ({
  coins: [],
  coinFilter: {
    page: 1,
    per_page: 10,
    order: "market_cap_desc",
    vs_currency: "usd",
    sparkline: false,
  },
  fetchCoins: async () => {
    const filter = get().coinFilter;
    const coins = await fetchCoins(filter);

    set({ coins });
  },
  setCoinFilter: (page: number) => {
    const filter = {
      ...get().coinFilter,
      page,
    };
    set({
      coinFilter: filter,
    });
  },
});

export default createCoinsSlice;
