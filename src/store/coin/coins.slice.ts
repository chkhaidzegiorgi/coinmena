import { ICoin } from "src/types";
import { StoreSlice } from "..";

export interface CoinSlice {
  coins: ICoin[];
  setCoins: (value: ICoin[]) => void;
}

const createCoinsSlice: StoreSlice<CoinSlice> = (set) => ({
  coins: [],
  setCoins: (value: ICoin[]) => set({ coins: value }),
});

export default createCoinsSlice;
