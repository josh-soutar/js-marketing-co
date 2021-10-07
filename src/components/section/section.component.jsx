import React from "react";
import { StyledSection, CoverImage } from "./section.styles";

const Section = ({ img, children }) => {
  return (
    <StyledSection className="custom-section">
      <CoverImage src={img} />
      {children}
    </StyledSection>
  );
};

export default Section;
