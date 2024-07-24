import { useMeQuery } from "../../../redux/api/home";
import { BlackBorderedSpace } from "../../BlackBorderedSpace";

import styles from "./style.module.scss";

const UserData = () => {
  const { data, isLoading } = useMeQuery();

  return (
    <BlackBorderedSpace width={103} height={9}>
      <div className={styles.container}>
        {isLoading ? "Loading" : `USER-${data?.id}`}
      </div>
    </BlackBorderedSpace>
  );
};

export default UserData;
