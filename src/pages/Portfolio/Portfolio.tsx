import { FC } from "react";
import useStore from "src/store";
import { ordersSelector } from "src/store/user/user.selector";
import { History } from "src/components";

export const Portfolio: FC = () => {
  const orders = useStore(ordersSelector);
  return (
    <>
      <h2>Portfolio</h2>

      <History orders={orders} />
    </>
  );
};
