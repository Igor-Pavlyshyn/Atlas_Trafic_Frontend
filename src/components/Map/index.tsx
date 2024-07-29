import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

import styles from "./style.module.scss";
import { COLORS } from "../../constants/scss/COLORS";
import { useMarkersQuery } from "../../redux/api/home";

const setQueryHandler = (id: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("id", id);
  window.history.pushState(null, "", `?${searchParams.toString()}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const StyledMap = () => {
  const { data, isLoading } = useMarkersQuery();

  return (
    <section className={styles.container}>
      <APIProvider apiKey="AIzaSyDCXtAQ82G7nb-j1Plkx1CE863ZFvkIfKM">
        {!isLoading && data ? (
          <Map
            defaultCenter={{ lat: +data[0].lat, lng: +data[0].lng }}
            defaultZoom={10}
            scaleControlOptions={null}
            mapTypeControl={false}
            streetViewControl={false}
            fullscreenControl={false}
            backgroundColor={COLORS.BLUE_GRADIENT}
          >
            {data?.map(({ id, lat, lng }) => (
              <Marker
                key={id}
                position={{ lat: +lat, lng: +lng }}
                onClick={() => setQueryHandler(`${id}`)}
              />
            ))}
          </Map>
        ) : (
          <>Loading...</>
        )}
      </APIProvider>
    </section>
  );
};

export default StyledMap;
