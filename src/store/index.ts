import create, { StoreApi } from "zustand";
import createCoinsSlice, { CoinSlice } from "./coin/coins.slice";
import createUserSlice, { UserSlice } from "./user/user.slice";

export type StoreState = CoinSlice & UserSlice;
export type StoreSlice<T> = (
  set: StoreApi<StoreState>["setState"],
  get: StoreApi<StoreState>["getState"]
) => T;

const useStore = create<StoreState>()((set, get) => ({
  ...createCoinsSlice(set, get),
  ...createUserSlice(set, get),
}));

export default useStore;
