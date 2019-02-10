import React from "react";
import { createAppContainer } from "react-navigation";
import DrawerStack from "./router";

// App Containers
const AppContainer = createAppContainer(DrawerStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
