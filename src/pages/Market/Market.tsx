import { useEffect } from "react";
import { Coins } from "src/components";
import useStore from "src/store";
import { coinsSelector } from "src/store/coin/coins.selector";
import { ICoin } from "src/types";

export const Market = () => {
  const coins: ICoin[] = useStore(coinsSelector);
  const fetch = useStore((state) => state.fetchCoins);

  useEffect(() => {
    console.log("fetching");
    fetch();
    
  }, []);

  return (
    <>
      <h2>Cryptocurrency Prices by Market Cap</h2>

      <Coins coins={coins} />
    </>
  );
};
