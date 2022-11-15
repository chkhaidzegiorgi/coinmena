import { FC } from "react";
import { formatMoney } from "src/core";
import { ICoin } from "src/types";
import { Wrapper } from "./coins.styles";

interface IProps {
  coins: ICoin[];
}

export const Coins: FC<IProps> = ({ coins }: IProps) => {
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
    </Wrapper>
  );
};
