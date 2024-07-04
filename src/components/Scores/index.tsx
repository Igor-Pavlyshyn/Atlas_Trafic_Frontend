import React from "react";
import ComponentModal from "../ComponentModal";

import styles from "./style.module.scss";
import StickChart from "../StickChart";

type Props = {};

const Scores = (props: Props) => {
  return (
    <ComponentModal title="Scores" seeMore>
      <div className={styles.container}>
        <StickChart title="B+" word1="Safety" word2="Score" />
        <StickChart title="A-" word1="Efficiency" word2="Score" />
        <StickChart title="A-" word1="Environmental" word2="Score" />
      </div>
    </ComponentModal>
  );
};

export default Scores;
