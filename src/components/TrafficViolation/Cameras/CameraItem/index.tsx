import { FormControl, MenuItem, Select } from "@mui/material";
import { BlackBorderedSpace } from "../../../BlackBorderedSpace";
import CameraImage from "../../../../assets/Cameras_picture.png";

import styles from "./style.module.scss";

type Props = {
  title: string;
  notifications: number;
  total: string;
};

const CameraItem = ({ notifications, title, total }: Props) => {
  return (
    <BlackBorderedSpace title={title} width={112} height={115}>
      <div className={styles.container}>
        <FormControl fullWidth>
          <Select hiddenLabel id="demo-simple-select">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <img src={CameraImage} alt="camera" />
        <div className={styles.container_notifications}>
          <div className={styles.container_notifications_number}>
            {notifications}
          </div>
          <div className={styles.container_notifications_text}>
            Total {total}
          </div>
        </div>
      </div>
    </BlackBorderedSpace>
  );
};

export default CameraItem;
