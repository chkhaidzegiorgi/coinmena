import { ICoin } from "src/types";
import { StoreState } from "../index";

export const coinsSelector = (state: StoreState): ICoin[] => state.coins;
