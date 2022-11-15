import { useState } from "react";
import { useParams } from "react-router-dom";
import { formatMoney, formatNumericString } from "src/core";
import useStore from "src/store";
import {
  Button,
  Details,
  DetailsWrapper,
  Label,
  Value,
  Wrapper,
} from "./Coin.styles";

export const Coin = ({}) => {
  const { symbol } = useParams();

  const [quantity, setQuantity] = useState(0);

  const coin = useStore((state) =>
    state.coins.find((coin) => coin.symbol === symbol)
  );
  const addOrder = useStore((state) => state.addOrder);

  const handleBuy = () => {
    if (quantity === 0 || !coin) {
      return;
    }

    addOrder(quantity, "USD", coin);
  };

  if (!coin) {
    return <h2>Not in State</h2>;
  }

  return (
    <Wrapper>
      <h2>
        <img src={coin.image} width={50} alt={coin.symbol} /> Coin - USD/
        {coin.symbol.toUpperCase()}
      </h2>
      <DetailsWrapper>
        <Details>
          <Label> Price:</Label>
          <Value>
            {formatMoney({
              amount: coin.current_price,
              currency: "USD",
            }).toString()}
          </Value>
        </Details>
        <Details>
          <Label> Market Cap:</Label>
          <Value>
            {formatMoney({
              amount: coin.market_cap,
              currency: "USD",
            }).toString()}
          </Value>
        </Details>
        <Details>
          <Label> Fully Diluted Valuation:</Label>
          <Value>
            {formatMoney({
              amount: coin.fully_diluted_valuation,
              currency: "USD",
            }).toString()}
          </Value>
        </Details>
        <Details>
          <Label> Total Volume:</Label>
          <Value>
            {formatMoney({
              amount: coin.total_volume,
              currency: "USD",
            }).toString()}
          </Value>
        </Details>
      </DetailsWrapper>

      <br />
      <br />

      <div>
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          min={0}
          step={0.0001}
          onChange={(e) => setQuantity(+e.target.value)}
        />
      </div>

      <Button onClick={handleBuy}>Buy</Button>
    </Wrapper>
  );
};
