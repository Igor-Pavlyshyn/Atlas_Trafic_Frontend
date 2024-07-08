import React from "react";
import { BlackBorderedSpace } from "../../BlackBorderedSpace";

import styles from "./style.module.scss";

type Props = {};

const History = (props: Props) => {
  return (
    <BlackBorderedSpace width={199} height={35}>
      <div className={styles.container}>
        <div className={styles.container_title}>History</div>
        <div className={styles.container_points}>
          <BlackBorderedSpace height={4}>Current week</BlackBorderedSpace>
          <BlackBorderedSpace height={4}>Month</BlackBorderedSpace>
          <BlackBorderedSpace height={4}>Year</BlackBorderedSpace>
        </div>
      </div>
    </BlackBorderedSpace>
  );
};

export default History;
