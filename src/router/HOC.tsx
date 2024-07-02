import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IPrivateRoute {
  accessToken: string | null;
  signComponent?: boolean;
  component: React.ComponentType<any>;
}

export const PrivateRoute = ({
  component: Component,
  accessToken,
  signComponent = false,
  ...rest
}: IPrivateRoute) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (signComponent && accessToken) {
      return navigate("/");
    }

    if (!accessToken) {
      return navigate("/signIn");
    }
  }, []);

  return <Component {...rest} />;
};
