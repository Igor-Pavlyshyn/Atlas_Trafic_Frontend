import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IPrivateRoute<T> {
  signComponent?: boolean;
  component: React.ComponentType<T>;
}

export const PrivateRoute = <T extends object>({
  component: Component,
  signComponent = false,
  ...rest
}: IPrivateRoute<T>) => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access");

    if (signComponent && accessToken) {
      return navigate("/", { replace: true });
    }

    if (!accessToken && !signComponent) {
      return navigate("/signIn");
    }
  }, [window.location.pathname]);

  return <Component {...(rest as T)} />;
};
