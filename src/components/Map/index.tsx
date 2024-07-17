import CustomMap from "../../assets/home/Map.png";

const Map = () => {
  const setQueryHandler = (id: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("id", id);
    window.history.pushState(null, "", `?${searchParams.toString()}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <section>
      <img
        onClick={() => setQueryHandler("1234")}
        src={CustomMap}
        alt="map"
        width={"510px"}
        height={280}
      />
    </section>
  );
};

export default Map;
