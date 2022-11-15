import { Routes, Route, Navigate } from "react-router-dom";
import { Route as AppRoute } from "src/core";
import { Header } from "./components";
import {
  ProtectedRoute,
  ProtectedRouteProps,
} from "./components/ProtectedRoute";
import { Coin } from "./pages/Coin";
import { Login } from "./pages/Login";
import { Market } from "./pages/Market";
import { Portfolio } from "./pages/Portfolio";
import useStore from "./store";
import { isAuthorizedSelector } from "./store/user/user.selector";

const App = () => {
  const isAuthenticated = useStore(isAuthorizedSelector);

  const defaultRouteProp: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated,
  };

  return (
    <>
      {isAuthenticated && <Header />}

      <Routes>
        <Route
          element={<ProtectedRoute {...defaultRouteProp} outlet={<Coin />} />}
          path={AppRoute.Coin}
        />
        <Route
          element={<ProtectedRoute {...defaultRouteProp} outlet={<Market />} />}
          path={AppRoute.Market}
        />
        <Route
          element={
            <ProtectedRoute {...defaultRouteProp} outlet={<Portfolio />} />
          }
          path={AppRoute.Portfolio}
        />
        {!isAuthenticated && <Route path="/login" element={<Login />} />}

        <Route path="*" element={<Navigate to={AppRoute.Market} />} />
      </Routes>
    </>
  );
};

export default App;
