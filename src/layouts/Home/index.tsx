import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthMutation, useLogoutMutation } from "../../redux/api/auth";
import { BlueButton } from "../../components/BlueButton";

// SVG
import FileSvg from "../../assets/home/File.svg";
import Scores from "../../components/Scores";
import Location from "../../components/Location";
import CameraView from "../../components/CameraView";
import PriceStatistics from "../../components/PriceStatistics";
import { BlackBorderedSpace } from "../../components/BlackBorderedSpace";
import Conversation from "../../components/Conversation";
import Weather from "../../components/Conversation/Weather";

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
    <section>
      <div style={{ display: "flex" }}>
        {/* <Scores /> */}
        {/* <Location /> */}
        {/* <CameraView /> */}
        {/* <PriceStatistics /> */}
        <Conversation />
      </div>
    </section>
  );
};

export default Home;
