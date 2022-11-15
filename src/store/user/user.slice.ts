import { StoreSlice } from "../index";

export interface UserSlice {
  isAuthorized: boolean;
  setIsAuthorized: (value: boolean) => void;
}

const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  isAuthorized: false,
  setIsAuthorized: (value: boolean) => set({ isAuthorized: value }),
});

export default createUserSlice;
