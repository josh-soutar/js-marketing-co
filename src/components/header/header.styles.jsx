import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      font-weight: bold;
    `}
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding-bottom: 5px;
  font-weight: bold;
  border-bottom: 3px solid;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PrimaryOption = css`
  background-color: orange;
`;

const getButtonStyles = (props) => {
  if (props.$primary) {
    return PrimaryOption;
  }
};

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
  ${getButtonStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
