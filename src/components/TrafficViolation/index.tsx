import ColorfulChart from "./ColorfulChart";
import ComponentModal from "../ComponentModal";
import ChartPoints from "./ChartPoints";
import BackArrow from "../../assets/Pink_arrow.svg";

import styles from "./style.module.scss";
import Cameras from "./Cameras";

const TrafficViolation = () => {
  return (
    <ComponentModal title="Real Time Traffic Violation and Crime" width={298}>
      <div className={styles.container}>
        <div className={styles.container_chart}>
          <ColorfulChart />
          <ChartPoints />
        </div>
        <div className={styles.container_arrows}>
          <img src={BackArrow} alt="Back Arrow" />
          <img src={BackArrow} alt="Back Arrow" />
        </div>
        <div className={styles.container_cameras}>
          <Cameras />
        </div>
      </div>
    </ComponentModal>
  );
};

export default TrafficViolation;
