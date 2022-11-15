import { FC } from "react";
import { formatMoney } from "src/core";
import { ICoin } from "src/types";
import { Paginator } from "../paginator";
import { Wrapper } from "./coins.styles";

interface IProps {
  coins: ICoin[];
  onPageChange?(selectedItem: { selected: number }): void;
}

// as I read documentation its 250 coins always
// I made it constant because API does not gives
// total amount of coins
const PAGE_COUNT = 250 / 10;

export const Coins: FC<IProps> = ({ coins, onPageChange }: IProps) => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return (
              <tr key={coin.symbol}>
                <td>
                  <img width={20} src={coin.image} alt={coin.symbol} />
                  {coin.symbol.toUpperCase()}
                </td>
                <td>
                  {formatMoney({
                    currency: "USD",
                    amount: coin.current_price,
                  }).toString()}
                </td>
                <td>
                  {formatMoney({
                    currency: "USD",
                    amount: coin.market_cap,
                  }).toString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Paginator pageCount={PAGE_COUNT} onPageChange={onPageChange} />
    </Wrapper>
  );
};
