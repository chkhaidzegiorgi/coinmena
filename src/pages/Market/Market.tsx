import { useQuery } from "react-query";
import { Coins } from "src/components";
import useStore from "src/store";
import { coinsSelector } from "src/store/coin/coins.selector";
import { CointListQuery, ICoin } from "src/types";
import { LoaderWrapper } from "./Market.styles";

export const Market = () => {
  const coins: ICoin[] = useStore(coinsSelector);
  const filter: CointListQuery = useStore((state) => state.coinFilter);
  const fetch = useStore((state) => state.fetchCoins);
  const setFilter = useStore((state) => state.setCoinFilter);
  const { error, isError, isLoading } = useQuery<void, Error>(
    ["coins", filter],
    fetch
  );

  const handlePageChange = ({ selected }: { selected: number }) => {
    setFilter(selected + 1); // because pagination is starting with 0
  };

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <>
      <h2>Cryptocurrency Prices by Market Cap</h2>

      {isLoading && (
        <LoaderWrapper>
          <div>Loading...</div>
        </LoaderWrapper>
      )}

      <Coins coins={coins} onPageChange={handlePageChange} />
    </>
  );
};
