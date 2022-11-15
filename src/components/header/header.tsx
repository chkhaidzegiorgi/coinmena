import { Link } from "react-router-dom";
import { formatMoney, Route } from "src/core";
import useStore from "src/store";
import { accountSelector } from "src/store/user/user.selector";
import { Wrapper,Navbar } from "./header.styles";

export const Header = () => {
  const account = useStore(accountSelector);
  return (
    <Wrapper>
      <div>Name: Giorgi Chkhaidze</div>

      <Navbar>
        <Link className="Nav__link" to={Route.Market}>
          Market
        </Link>
        <Link className="Nav__link" to={Route.Portfolio}>
          Portfolio
        </Link>
      </Navbar>
      <div>
        Balance:
        {formatMoney({
          amount: account.balance.amount,
          currency: account.balance.currency,
        }).toString()}
      </div>
    </Wrapper>
  );
};
