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

  console.log(word1);

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.top_line} src={TopLine} alt="TopLine" />

        <PieChart
          series={[
            {
              data: needItems,
              innerRadius: 28,
              outerRadius: 35,
              paddingAngle: 2,
              cornerRadius: 2,
              startAngle: -90,
              // endAngle: 180,
              // cx: 250,
              // cy: 150,
              cx: 55,
            },
          ]}
          width={106}
          height={132}
        />

        <img className={styles.bottom_line} src={BottomLine} alt="BottomLine" />
      </div>

      <p>{title}</p>

      <h3 className={word1 == "Environmental" ? styles.enviromental : ""}>
        {word1} <br /> {word2}
      </h3>
    </div>
  );
};

export default StickChart;
