import { login } from "src/core/services";
import { ICoin, IMoney } from "src/types";
import { IAccount, IOrder } from "src/types/user.type";
import { StoreSlice } from "../index";

export interface UserSlice {
  isAuthorized: boolean;
  account: IAccount;
  orders: IOrder[];
  addOrder: (quantity: number, currency: string, coin: ICoin) => void;
  login: (username: string, password: string) => void;
}

const createUserSlice: StoreSlice<UserSlice> = (set, get) => ({
  isAuthorized: false,
  login: async (username: string, password: string) => {
    const response = await login(username, password);

    console.log(response, "response");
    if (response && response.token) {
      set({ isAuthorized: true });
    }
  },
  orders: [],
  addOrder: (quantity: number, currency: string, coin: ICoin) => {
    const currentAccount = get().account;
    const totalPrice = quantity * coin.current_price;

    const newBalance = currentAccount.balance.amount - totalPrice;

    if (newBalance < 0) {
      alert("Balance is not enough to proceed the process");
      return;
    }

    const currentOrders = get().orders;

    const newOrder: IOrder = {
      quantity,
      currency,
      price: totalPrice,
      coin: coin,
    };

    const orders = [...currentOrders, newOrder];

    alert("Order Created");

    set({
      orders,
      account: {
        ...currentAccount,
        balance: {
          ...currentAccount.balance,
          amount: newBalance,
        },
      },
    });
  },
  account: {
    fullname: "Giorgi Chkhaidze",
    balance: {
      amount: 10000,
      currency: "USD",
    },
  },
});

export default createUserSlice;
