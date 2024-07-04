import React from "react";
import { BlackBorderedSpace } from "../../BlackBorderedSpace";

import styles from "./style.module.scss";

type Props = {};

const USER_NUMBER = "USER-2024-001";

const UserData = (props: Props) => {
  return (
    <BlackBorderedSpace width={103} height={9}>
      <div className={styles.container}>{USER_NUMBER}</div>
    </BlackBorderedSpace>
  );
};

export default UserData;
