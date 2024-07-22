import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

import styles from "./style.module.scss";

const setQueryHandler = (id: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("id", id);
  window.history.pushState(null, "", `?${searchParams.toString()}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const StyledMap = () => {
  const center = { lat: 50.450001, lng: 30.523333 };

  return (
    <section className={styles.container}>
      <APIProvider apiKey="AIzaSyDCXtAQ82G7nb-j1Plkx1CE863ZFvkIfKM">
        <Map defaultCenter={center} defaultZoom={10} scaleControlOptions={null}>
          <Marker
            position={{ lat: 50.400001, lng: 30.513333 }}
            onClick={() => setQueryHandler("1234")}
          />
          <Marker
            position={{ lat: 50.490001, lng: 30.743333 }}
            onClick={() => setQueryHandler("1235")}
          />
        </Map>
      </APIProvider>
    </section>
  );
};

export default StyledMap;
