import styled from "styled-components";
import { COLORS } from "../../constants/scss/COLORS";
import Dots from "../../assets/three_dots.svg";

import styles from "./style.module.scss";

interface StyledSpaceProps {
  width?: number;
  height?: number;
}

interface BlackBorderedSpaceProps extends StyledSpaceProps {
  children: React.ReactNode;
  title?: string;
}

const BlackStyledBorderedSpace = styled.div<StyledSpaceProps>`
  width: ${(props) =>
    props.width ? `${props.width}px` : "fit-content"} !important;
  height: ${(props) =>
    props.height ? `${props.height}px` : "fit-content"} !important;

  background-color: ${COLORS.BLACK_1};

  border: 1px solid ${COLORS.DARK_PURPLE};
  border-radius: 8px;

  padding: 8px;
`;

export const BlackBorderedSpace = ({
  children,
  height,
  width,
  title,
}: BlackBorderedSpaceProps) => {
  return (
    <BlackStyledBorderedSpace height={height} width={width}>
      {title && (
        <div className={styles.header}>
          <p>{title}</p>
          <img src={Dots} alt="dots" width={16} height={16} />
        </div>
      )}

      {children}
    </BlackStyledBorderedSpace>
  );
};
