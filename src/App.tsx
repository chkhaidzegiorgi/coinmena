import { Routes, Route, Navigate } from "react-router-dom";
import { Route as AppRoute } from "src/core";
import {
  ProtectedRoute,
  ProtectedRouteProps,
} from "./components/ProtectedRoute";
import { Login } from "./pages/Login";
import { Market } from "./pages/Market";
import { Portfolio } from "./pages/Portfolio";

const App = () => {
  const defaultRouteProp: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: true,
  };

  return (
    <Routes>
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
      {!defaultRouteProp.isAuthenticated && (
        <Route path="/login" element={<Login />} />
      )}

      <Route path="*" element={<Navigate to={AppRoute.Market} />} />
    </Routes>
  );
};

export default App;
