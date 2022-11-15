import { Navigate } from "react-router";
import { Route } from "src/core";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath?: string;
  outlet: JSX.Element;
};

export function ProtectedRoute({
  isAuthenticated,
  authenticationPath = Route.Login,
  outlet,
}: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }

  return outlet;
}
