import { BlueButton } from "../../components/BlueButton";

// SVG
import FileSvg from "../../assets/home/File.svg";
import AlarmSvg from "../../assets/alarm.svg";
import TaskSvg from "../../assets/home/Task.svg";

import Scores from "../../components/Scores";
import Location from "../../components/Location";
import CameraView from "../../components/CameraView";
import PriceStatistics from "../../components/PriceStatistics";
import Conversation from "../../components/Conversation";
import Health from "../../components/Health";

import styles from "./style.module.scss";
import Map from "../../components/Map";
import Tools from "../../components/Tools";
import TrafficViolation from "../../components/TrafficViolation";

const Home = () => {
  // const navigate = useNavigate();
  // const refresh = localStorage.getItem("refresh");

  // const [logout] = useLogoutMutation();

  // const logoutHandler = () => {
  //   if (refresh) {
  //     logout({ refresh });
  //   }
  //   if (localStorage.getItem("access")) {
  //     localStorage.removeItem("access");
  //   }
  //   if (localStorage.getItem("refresh")) {
  //     localStorage.removeItem("refresh");
  //   }
  //   return navigate("/signIn");
  // };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.container_top}>
          <div className={styles.container_top_rows}>
            <div className={styles.container_top_rows_firstRow}>
              <Scores />
              <div className={styles.container_top_rows_firstRow_buttons}>
                <BlueButton width={164} svg={FileSvg}>
                  Export reports
                </BlueButton>
                <BlueButton width={164} svg={TaskSvg}>
                  Assign Task
                </BlueButton>
              </div>
            </div>

            <div className={styles.container_top_rows_secondRow}>
              <Location />
              <BlueButton width={250} svg={AlarmSvg}>
                Assign Emergency Services
              </BlueButton>
            </div>

            <div>
              <CameraView />
            </div>
          </div>
          <div>
            <Map />
          </div>
          <div className={styles.container_bottom_left}>
            <Tools />
            <TrafficViolation />
          </div>
        </div>

        <div className={styles.container_top_rows_fourthRow}>
          <PriceStatistics />
          <Conversation />
          <Health />
        </div>
      </div>
    </section>
  );
};

export default Home;
