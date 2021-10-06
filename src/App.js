import React from "react";
import "./App.scss";

import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: "transparent",
    };
  }

  render() {
    return (
      <div>
        <Header bgColor={this.state.bgColor} />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
