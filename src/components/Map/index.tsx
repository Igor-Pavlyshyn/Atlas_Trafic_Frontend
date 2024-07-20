import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

import styles from "./style.module.scss";
import Video from "./Video";
import { useLayoutEffect, useState } from "react";

const setQueryHandler = (id: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("id", id);
  window.history.pushState(null, "", `?${searchParams.toString()}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const StyledMap = () => {
  const [id, setId] = useState<string | null>(null);

  const center = { lat: 50.450001, lng: 30.523333 };

  useLayoutEffect(() => {
    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("id");
      setId(id);
    };

    window.addEventListener("popstate", handlePopState);

    handlePopState();

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <section className={styles.container}>
      {!id ? (
        <APIProvider apiKey="AIzaSyDCXtAQ82G7nb-j1Plkx1CE863ZFvkIfKM">
          <Map
            defaultCenter={center}
            defaultZoom={10}
            scaleControlOptions={null}
          >
            <Marker
              position={{ lat: 50.400001, lng: 30.513333 }}
              onClick={() => setQueryHandler("1234")}
            />
          </Map>
        </APIProvider>
      ) : (
        <Video clickHandler={setQueryHandler} />
      )}
      {/* ) : (
      <img
        onClick={() => setQueryHandler("1234")}
        src={CustomMap}
        alt="map"
        width={"994px"}
        height={280}
      /> */}
    </section>
  );
};

export default StyledMap;
