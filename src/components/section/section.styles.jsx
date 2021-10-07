import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const CoverImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: top;
  ${(props) =>
    props.src &&
    css`
      background-image: ${"url(" + props.src + ")"};
    `}
`;
