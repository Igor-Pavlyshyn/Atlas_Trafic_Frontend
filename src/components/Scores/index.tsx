import ComponentModal from "../ComponentModal";

import styles from "./style.module.scss";
import StickChart from "../StickChart";

const Scores = () => {
  return (
    <ComponentModal title="Scores" width={431} height={230} seeMore>
      <div className={styles.container}>
        <StickChart title="B+" word1="Safety" word2="Score" />
        <StickChart title="A-" word1="Efficiency" word2="Score" />
        <StickChart title="A-" word1="Environmental" word2="Score" />
        <StickChart title="C+" word1="Cost" word2="Score" />
      </div>
    </ComponentModal>
  );
};

export default Scores;
