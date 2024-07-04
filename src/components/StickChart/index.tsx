import { PieChart } from "@mui/x-charts";
import React from "react";
import { COLORS } from "../../constants/scss/COLORS";
import TopLine from "../../assets/charts/TopLine.svg";
import BottomLine from "../../assets/charts/BottomLine.svg";

import styles from "./style.module.scss";

type Props = {
  title: string;
  word1: string;
  word2: string;
};

const StickChart = ({ title, word1, word2 }: Props) => {
  const needItems = [
    ...Array(15).fill({ value: 3, color: "yellow" }),
    ...Array(40).fill({ value: 3, color: COLORS.PRIMARY_PINK }),
    ...Array(5).fill({
      value: 3,
      color: "green",
    }),
  ];

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.top_line} src={TopLine} alt="TopLine" />

        <PieChart
          series={[
            {
              data: needItems,
              innerRadius: 60,
              outerRadius: 75,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -90,
              //   endAngle: 180,
              // cx: 250,
              // cy: 150,
            },
          ]}
          width={300}
          height={300}
        />

        <img className={styles.bottom_line} src={BottomLine} alt="BottomLine" />
      </div>

      <p>{title}</p>

      <h3>
        {word1} <br /> {word2}
      </h3>
    </div>
  );
};

export default StickChart;
