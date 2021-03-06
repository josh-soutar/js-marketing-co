import React from "react";

import { useLocation } from "react-router-dom";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

const Header = () => {
  const { pathname } = useLocation();
  console.log("pathname is " + pathname);

  const bgColor = setHeaderColor(pathname);

  function setHeaderColor(pathname) {
    switch (pathname) {
      case "/page with a different header color here":
        return "white";
      default:
        return "transparent";
    }
  }

  return (
    <HeaderContainer bgColor={bgColor} className="header">
      <LogoContainer to="/">js-marketing-co</LogoContainer>
      <OptionsContainer>
        <OptionLink $active={pathname === "/about" ? 1 : 0} to="/about">
          WHO WE ARE
        </OptionLink>
        <OptionLink $active={pathname === "/clients" ? 1 : 0} to="/clients">
          OUR CLIENTS
        </OptionLink>
        <OptionLink $active={pathname === "/contact"} $primary to="/contact">
          GET IN TOUCH
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};
export default Header;
