import ComponentModal from "../../ComponentModal";
import { GradientButton } from "../../GradientButton";

import styles from "./style.module.scss";

type TYPE_DATA = {
  text: string;
}[];

const MOCKED_DATA1: TYPE_DATA = [
  {
    text: "ATLAS One Camera System",
  },
  {
    text: "Smart Hub Mini",
  },
  {
    text: "Aero Vision (AV)",
  },
];
const MOCKED_DATA2: TYPE_DATA = [
  {
    text: "Intelli Flow",
  },
  {
    text: "Grid Flow",
  },
  {
    text: "Auto Sync",
  },
  {
    text: "Sky Track",
  },
  {
    text: "RedEye",
  },
  {
    text: "Rapid Response ",
  },
  {
    text: "Crime Watch",
  },
  {
    text: "School Guard",
  },
  {
    text: "Cyber Shield",
  },
  {
    text: "Maintenance + ",
  },
  {
    text: "Traffic Pulse",
  },
  {
    text: "Smart Support",
  },
];

const ActiveDashboard = () => {
  return (
    <ComponentModal>
      <div className={styles.container}>
        <div>
          Control <br /> Dashboard
        </div>
        <div className={styles.container_title}>Active Hardware</div>
        <div className={styles.container_buttons}>
          {MOCKED_DATA1.map((item, index) => (
            <GradientButton height={24} key={index}>
              {item.text}
            </GradientButton>
          ))}
        </div>
        <div className={styles.container_title}>Active Software</div>
        <div className={styles.container_buttons}>
          {MOCKED_DATA2.map((item, index) => (
            <GradientButton height={24} key={index}>
              {item.text}
            </GradientButton>
          ))}
        </div>
        <div className={styles.container_title}>Inactive Software</div>
        <GradientButton height={24} width={152}>
          None
        </GradientButton>
        <div className={styles.container_title}>Inactive Software</div>
        <GradientButton height={24} width={152}>
          Coming Soon
        </GradientButton>
      </div>
    </ComponentModal>
  );
};

export default ActiveDashboard;
