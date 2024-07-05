import React from "react";

import CustomMap from "../../assets/map.png";

type Props = {};

const Map = (props: Props) => {
  return (
    <section>
      <img src={CustomMap} alt="" width={852} height={278} />
    </section>
  );
};

export default Map;
