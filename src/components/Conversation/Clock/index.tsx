import { BlackBorderedSpace } from "../../BlackBorderedSpace";
import ClockSvg from "../../../assets/conversation/clock.svg";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";

type TYPE_MOCKED_DATA = {
  time: string;
  count: number;
  part: string;
  date: string;
};

const MOCKED_DATA: TYPE_MOCKED_DATA = {
  time: "10:15",
  count: 45,
  part: "AM",
  date: "Tuesday, May 16",
};

const Clock = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [part, setPart] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const { count } = MOCKED_DATA;

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);

      if (+hours >= 12) {
        setPart("PM");
      } else {
        setPart("AM");
      }

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const monthsOfYear = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const dayOfWeek = daysOfWeek[now.getDay()];
      const month = monthsOfYear[now.getMonth()];
      const date = now.getDate();

      setDay(`${dayOfWeek}, ${month} ${date}`);

      requestAnimationFrame(updateCurrentTime);
    };

    updateCurrentTime();
  }, []);

  return (
    <BlackBorderedSpace width={86} height={82}>
      <div className={styles.container}>
        <img src={ClockSvg} alt="Clock" />
        <div className={styles.absolute_text}>
          <div className={styles.absolute_text_top}>
            <div className={styles.absolute_text_top_time}>{currentTime}</div>
            <div className={styles.absolute_text_top_parts}>
              <div>{count}</div>
              <div>{part}</div>
            </div>
          </div>
          <div className={styles.absolute_text_bottom}>{day}</div>
        </div>
      </div>
    </BlackBorderedSpace>
  );
};

export default Clock;
