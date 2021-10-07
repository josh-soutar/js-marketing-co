import React from "react";
import { HomePageContainer } from "./homepage.styles";
import Section from "../../components/section/section.component";
import Section1Image from "../../assets/logo512.png";

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <Section img={Section1Image}>
        <h2>Hey is the section heading</h2>
        <p>This is some paragraph text</p>
      </Section>

      <Section img={Section1Image}>
        <h2>This is the next section</h2>
        <p>This is some paragraph text</p>
      </Section>
    </HomePageContainer>
  );
};

export default HomePage;
