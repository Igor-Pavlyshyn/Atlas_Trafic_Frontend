import styled from "styled-components";
import { COLORS } from "../../constants/scss/COLORS";

interface StyledButtonProps {
  width?: number;
}

interface ButtonProps extends StyledButtonProps {
  svg: string;
  children: React.ReactNode;
}

const BlueStyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: ${COLORS.BLUE_GRADIENT_SECONDARY} !important;
  color: white;

  width: ${(props) => (props.width ? `${props.width}px` : "164px")};
  height: 46px;
  border: none;
  border-radius: 8px;

  font-size: 12px;
  font-family: Inter;
  font-weight: 600;

  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const BlueButton = ({ width, svg, children }: ButtonProps) => {
  return (
    <BlueStyledButton width={width}>
      <img src={svg} alt="File" />
      {children}
    </BlueStyledButton>
  );
};
