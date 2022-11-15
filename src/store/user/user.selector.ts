import { StoreState } from "../index";

export const isAuthorizedSelector = (state: StoreState): boolean => state.isAuthorized;
