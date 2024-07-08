import ColorfulChart from "./ColorfulChart";
import ComponentModal from "../ComponentModal";
import ChartPoints from "./ChartPoints";

import styles from "./style.module.scss";

const TrafficViolation = () => {
  return (
    <ComponentModal title="Real Time Traffic Violation and Crime ">
      <div className={styles.container}>
        <ColorfulChart />
        <ChartPoints />
      </div>
    </ComponentModal>
  );
};

export default TrafficViolation;
