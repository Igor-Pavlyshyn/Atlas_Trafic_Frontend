import ComponentModal from "../../ComponentModal";
import { GradientButton } from "../../GradientButton";

import styles from "./style.module.scss";

type TYPE_DATA = {
  text: string;
}[];

const MOCKED_DATA: TYPE_DATA = [
  {
    text: "Clock In",
  },
  {
    text: "Update All Software",
  },
  {
    text: "Smart Control Settings",
  },
  {
    text: "Logout",
  },
];

const UserDashboard = () => {
  return (
    <ComponentModal>
      <div className={styles.container}>
        <div className={styles.container_title}>User Dashboard</div>
        <div className={styles.container_buttons}>
          {MOCKED_DATA.map((item, index) => (
            <GradientButton height={24} key={index} width={152}>
              {item.text}
            </GradientButton>
          ))}
        </div>
      </div>
    </ComponentModal>
  );
};

export default UserDashboard;
