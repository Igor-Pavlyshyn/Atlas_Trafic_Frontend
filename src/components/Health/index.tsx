import ComponentModal from "../ComponentModal";
import { Cell, Pie, PieChart } from "recharts";
import { COLORS } from "../../constants/scss/COLORS";
import YellowLine from "../../assets/Yellow_line.svg";
import LightBlueLine from "../../assets/Lightblue_line.svg";
import BlueLine from "../../assets/Blue_line.svg";
import PurpleLine from "../../assets/Purple_line.svg";

import styles from "./style.module.scss";

const data = [
  { name: "Penthouses", value: 8, units: 27, color: "#f7c159" },
  { name: "Apartments", value: 47, units: 672, color: "#47bee2" },
  { name: "Multi family", value: 17, units: 105, color: "#8d5ad2" },
  { name: "Townhouses", value: 28, units: 194, color: "#0544be" },
];

const data2 = [
  {
    name: "Penthouses",
    value: 50,
    units: 27,
    color: COLORS.PRIMARY_PINK,
  },
];

const Health = () => {
  return (
    <ComponentModal width={282}>
      <div className={styles.container}>
        <h1>Intersection Health</h1>
        <div className={styles.container_pie}>
          <div className={styles.container_pie_leftTopCorner}>
            <div>
              <p>{data[0].name}</p>
              <p>{data[0].value}%</p>
              <p>
                Units{"  "}
                {data[0].units}
              </p>
            </div>
            <img src={YellowLine} alt="yellow line" width={46} height={46} />
          </div>
          <div className={styles.container_pie_rightTopCorner}>
            <img src={LightBlueLine} alt="light line" width={46} height={46} />
            <div>
              <p>{data[1].name}</p>
              <p>{data[1].value}%</p>
              <p>
                Units{"  "}
                {data[1].units}
              </p>
            </div>
          </div>
          <div className={styles.container_pie_rightBottomCorner}>
            <img src={BlueLine} alt="" width={46} height={46} />
            <div>
              <p>{data[3].name}</p>
              <p>{data[3].value}%</p>
              <p>
                Units{"  "}
                {data[3].units}
              </p>
            </div>
          </div>
          <div className={styles.container_pie_leftBottomCorner}>
            <div>
              <p>{data[2].name}</p>
              <p>{data[2].value}%</p>
              <p>
                Units{"  "}
                {data[2].units}
              </p>
            </div>
            <div className={styles.container_pie_rightBottomCorner}>
              <img src={PurpleLine} alt="" width={46} height={46} />
            </div>
          </div>
          <PieChart width={156} height={156}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={44}
              innerRadius={35}
              cornerRadius={50}
              fill="#8884d8"
              stroke="none"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className={styles.container_pie_inside}>
            <PieChart width={200} height={200}>
              <Pie
                width={106}
                height={106}
                data={data2}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={31}
                innerRadius={25}
                startAngle={400}
                endAngle={200}
                cornerRadius={30}
                fill="#8884d8"
                stroke="none"
                dataKey="value"
              >
                {data2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </ComponentModal>
  );
};

export default Health;
