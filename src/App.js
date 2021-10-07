import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";

export const BodyWrapper = styled.div``;

const App = () => {
  return (
    <div>
      <Header />
      <BodyWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </BodyWrapper>
    </div>
  );
};

export default App;
