import React from "react";
import ColorfulChart from "./ColorfulChart";
import ComponentModal from "../ComponentModal";

type Props = {};

const TrafficViolation = (props: Props) => {
  return (
    <ComponentModal title="Real Time Traffic Violation and Crime ">
      <div>
        <ColorfulChart />
      </div>
    </ComponentModal>
  );
};

export default TrafficViolation;
