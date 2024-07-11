import { useNavigate } from "react-router-dom";
import ComponentModal from "../../ComponentModal";
import { GradientButton } from "../../GradientButton";

import styles from "./style.module.scss";
import { useLogoutMutation } from "../../../redux/api/auth";

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
  const navigate = useNavigate();
  const refresh = localStorage.getItem("refresh");

  const [logout] = useLogoutMutation();

  const logoutHandler = (text: string) => {
    if (text === "Logout") {
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
    } else {
      return;
    }
  };

  return (
    <ComponentModal>
      <div className={styles.container}>
        <div className={styles.container_title}>User Dashboard</div>
        <div className={styles.container_buttons}>
          {MOCKED_DATA.map((item, index) => (
            <GradientButton
              height={24}
              key={index}
              width={152}
              onClick={() => logoutHandler(item.text)}
            >
              {item.text}
            </GradientButton>
          ))}
        </div>
      </div>
    </ComponentModal>
  );
};

export default UserDashboard;
