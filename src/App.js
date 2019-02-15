import React from "react";
import { createAppContainer } from "react-navigation";
import RootStack from "./router";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore({});
// App Containers
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
