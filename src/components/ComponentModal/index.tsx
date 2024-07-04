import React from "react";
import styles from "./style.module.scss";
import Arrow from "../../assets/home/Front_arrow.svg";
import styled from "styled-components";

interface StyledProps {
  width?: number;
  height?: number;
  padding?: boolean;
}

interface Props extends StyledProps {
  children: React.ReactNode;
  title?: string;
  seeMore?: boolean;
  svg?: string | false;
}

const StyledSection = styled.section<StyledProps>`
  width: ${(props) =>
    props.width ? `${props.width}px` : "fit-content"} !important;
  height: ${(props) => props.height && `${props.height}px`};
  padding: ${(props) => (props.padding ? "20px" : "0px")};
`;
const HeaderDiv = styled.div<StyledProps>`
  padding: ${(props) => !props.padding && "0px 16px 0px 16px"} !important;
`;

const ComponentModal = ({
  children,
  seeMore = false,
  title,
  width,
  height,
  svg = false,
  padding = true,
  ...rest
}: Props) => {
  return (
    <StyledSection
      className={styles.container}
      width={width}
      padding={padding}
      height={height}
    >
      {(title || seeMore) && (
        <HeaderDiv className={styles.container_header} padding={padding}>
          {title && (
            <h1>
              {svg && <img src={svg} alt="location" />} {title}
            </h1>
          )}
          {seeMore && (
            <p className={styles.container_header_seemore}>
              See More <img src={Arrow} width={16} height={16} alt="" />
            </p>
          )}
        </HeaderDiv>
      )}
      {children}
    </StyledSection>
  );
};

export default ComponentModal;
