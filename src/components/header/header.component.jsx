import React from "react";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

const Header = ({ bgColor }) => (
  <HeaderContainer bgColor={bgColor}>
    <LogoContainer to="/">js-marketing-co</LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
