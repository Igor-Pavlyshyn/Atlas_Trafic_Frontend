import React from "react";
import ComponentModal from "../ComponentModal";
import TodaySchedule from "./TodaySchedule";
import Weather from "./Weather";
import Messages from "./Messages";
import Clock from "./Clock";
import UserData from "./UserData";
import TaskProgress from "./TaskProgress";

import styles from "./style.module.scss";
import Note from "./Note";
import Support from "./Support";

type Props = {};

const Conversation = (props: Props) => {
  return (
    <ComponentModal width={382}>
      <div className={styles.container}>
        <div className={styles.container_top}>
          <div className={styles.container_top_schedule}>
            <TodaySchedule />
            <Messages />
          </div>
          <div className={styles.container_top_row}>
            <div>
              <div className={styles.container_top_row_weather}>
                <Weather />
                <Clock />
              </div>
              <div className={styles.container_top_row_user}>
                <UserData />
                <TaskProgress />
              </div>
            </div>
            <Note />
          </div>
        </div>
        <div className={styles.container_bottom}>
          <Support />
        </div>
      </div>
    </ComponentModal>
  );
};

export default Conversation;
