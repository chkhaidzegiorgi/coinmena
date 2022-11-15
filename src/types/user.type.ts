import { ICoin, IMoney } from "./coin.type";

export interface IAccount {
  fullname: string;
  balance: IMoney;
}

export interface IOrder {
  quantity: number;
  currency: string;
  price: number;
  coin: ICoin;
}
