import { FC } from "react";
import { formatMoney, formatNumericString } from "src/core";
import { IOrder } from "src/types/user.type";
import { Table } from "../table";

interface IProps {
  orders: IOrder[];
}

export const History: FC<IProps> = ({ orders }) => {
  return (
    <Table>
      <>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr key={order.coin.symbol}>
                <td>
                  <img
                    width={20}
                    src={order.coin.image}
                    alt={order.coin.symbol}
                  />
                  {order.coin.symbol.toUpperCase()}
                </td>
                <td>{formatNumericString(order.quantity.toString())}</td>
                <td>
                  {formatMoney({
                    currency: "USD",
                    amount: order.coin.current_price * order.quantity,
                  }).toString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </>
    </Table>
  );
};
