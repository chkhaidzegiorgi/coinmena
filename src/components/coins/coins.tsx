import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { formatMoney, Route } from "src/core";
import { ICoin } from "src/types";
import { Paginator } from "../paginator";
import { Table } from "../table";

interface IProps {
  coins: ICoin[];
  onPageChange?(selectedItem: { selected: number }): void;
}

// as I read documentation its 250 coins always
// I made it constant because API does not gives
// total amount of coins
const PAGE_COUNT = 250 / 10;

export const Coins: FC<IProps> = ({ coins, onPageChange }: IProps) => {
  const navigate = useNavigate();

  const handleClick = (coin: ICoin) => {
    const nextRoute = Route.Coin.replace(":symbol", coin.symbol);
    navigate(nextRoute);
  };

  return (
    <>
      <Table>
        <>
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
                <tr key={coin.symbol} onClick={() => handleClick(coin)}>
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
        </>
      </Table>
      <Paginator pageCount={PAGE_COUNT} onPageChange={onPageChange} />
    </>
  );
};
