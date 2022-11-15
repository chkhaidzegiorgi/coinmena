import { IAccount, IOrder } from "src/types/user.type";
import { StoreState } from "../index";

export const isAuthorizedSelector = (state: StoreState): boolean =>
  state.isAuthorized;
export const accountSelector = (state: StoreState): IAccount => state.account;
export const ordersSelector = (state: StoreState): IOrder[] => state.orders;
