import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthMutation, useLogoutMutation } from "../../redux/api/auth";

type Props = {};

const Home = (props: Props) => {
  const navigate = useNavigate();
  const refresh = localStorage.getItem("refresh");

  const [logout, { isSuccess }] = useLogoutMutation();

  const logoutHandler = () => {
    if (refresh) {
      logout({ refresh });
    }
    if (localStorage.getItem("access")) {
      localStorage.removeItem("access");
    }
    if (localStorage.getItem("refresh")) {
      localStorage.removeItem("refresh");
    }
    return navigate("/signIn");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={logoutHandler}>Log out</button>
    </div>
  );
};

export default Home;
