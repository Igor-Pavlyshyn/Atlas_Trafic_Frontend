import ComponentModal from "../ComponentModal";
import CarCrashes from "./CarCrashes";
import Chart from "./Chart";

import styles from "./style.module.scss";
import Nav from "./Nav";
import History from "./History";

const Tools = () => {
  return (
    <ComponentModal width={466} height={300}>
      <div className={styles.container}>
        <div className={styles.container_leftSide}>
          <CarCrashes />
          <Chart />
        </div>
        <div className={styles.container_rightSide}>
          <Nav />
          <History />
        </div>
      </div>
    </ComponentModal>
  );
};

export default Tools;
