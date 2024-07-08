import ComponentModal from "../ComponentModal";
import Circle from "../../assets/Green_circle.svg";
import LocationSvg from "../../assets/location.svg";

import styles from "./style.module.scss";

const MOCKED_DATA = {
  id: 1234,
  lat: 48.8588443,
  lng: 2.2943506,
  live: true,
};

const Location = () => {
  // const [isLive, setIsLive] = useState<boolean>(true);

  return (
    <ComponentModal
      title="Selected Location"
      svg={LocationSvg}
      width={210}
      height={190}
    >
      <div className={styles.container}>
        <p>
          Intersection ID : <div>{MOCKED_DATA.id}</div>
        </p>
        <p>
          Coordinates:
          <div>
            {MOCKED_DATA.lat}, {MOCKED_DATA.lng}
          </div>
        </p>
        <p>
          Condition:
          <div className={styles.container_live}>
            {MOCKED_DATA.live ? (
              <span>
                <img src={Circle} alt="green" /> <span>Live</span>
              </span>
            ) : (
              <span>
                <img src={Circle} alt="green" /> <span>Not live</span>
              </span>
            )}
          </div>
        </p>
      </div>
    </ComponentModal>
  );
};

export default Location;
