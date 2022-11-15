import { login } from "src/core/services";
import { StoreSlice } from "../index";

export interface UserSlice {
  isAuthorized: boolean;
  login: (username: string, password: string) => void;
}

const createUserSlice: StoreSlice<UserSlice> = (set) => ({
  isAuthorized: true,
  login: async (username: string, password: string) => {
    const response = await login(username, password);

    console.log(response, "response");
    if (response && response.token) {
      set({ isAuthorized: true });
    }
  },
});

export default createUserSlice;
