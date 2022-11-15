import create, { StoreApi } from "zustand";
import { persist, StateStorage } from "zustand/middleware";
import { MMKVLoader } from "react-native-mmkv-storage";
import createCoinsSlice, { CoinSlice } from "./coin/coins.slice";
import createUserSlice, { UserSlice } from "./user/user.slice";

const sessionStorage = new MMKVLoader()
  .withInstanceID("sessionStorage")
  .initialize();

export type StoreState = CoinSlice & UserSlice;
export type StoreSlice<T> = (
  set: StoreApi<StoreState>["setState"],
  get: StoreApi<StoreState>["getState"]
) => T;

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      ...createCoinsSlice(set, get),
      ...createUserSlice(set, get),
    }),
    {
      name: "store",
      getStorage: () => sessionStorage as StateStorage,
    }
  )
);

export default useStore;
