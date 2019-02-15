import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./screens/HomeScreen";
import ChapterGroupScreen from "./screens/ChapterGroupScreen";
import ChapterScreen from "./screens/ChapterScreen";
import KuralScreen from "./screens/KuralScreen";
import KuralDetailScreen from "./screens/KuralDetailScreen";
import colors from "./colors";

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    ChapterGroup: { screen: ChapterGroupScreen },
    Chapter: { screen: ChapterScreen },
    Kural: { screen: KuralScreen },
    KuralDetail: { screen: KuralDetailScreen }
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: "center",
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: colors.tintColor
        },
        headerTitleStyle: {
          textAlign: "center",
          flex: 1
        },
        headerRight: (
          <MaterialIcons
            style={{ marginRight: 10, padding: 10 }}
            // color={colors.tintColor}
            onPress={() => navigation.navigate("Home")}
            name="home"
            size={24}
          />
        )
      };
    }
  }
);

export default RootStack;
