import React from "react";
import ComponentModal from "../ComponentModal";
import CarCrashes from "./CarCrashes";
import Chart from "./Chart";

import styles from "./style.module.scss";
import Nav from "./Nav";

type Props = {};

const Tools = (props: Props) => {
  return (
    <ComponentModal>
      <div className={styles.container}>
        <div className={styles.container_leftSide}>
          <CarCrashes />
          <Chart />
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </ComponentModal>
  );
};

export default Tools;
