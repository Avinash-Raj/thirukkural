import React, { Component } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-navigation";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  StatusBar
} from "react-native";
import strings from "../strings";

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: strings.appname,
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="move-to-inbox"
        size={24}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <SafeAreaView
          style={{
            marginTop: 50,
            flex: 1
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={() =>
                  navigate("ChapterGroup", {
                    title: strings.araththuppaal,
                    no: 1
                  })
                }
                title={strings.araththuppaal}
              />
            </View>

            <View style={styles.button}>
              <Button
                onPress={() =>
                  navigate("ChapterGroup", { title: strings.porutpaal, no: 2 })
                }
                title={strings.porutpaal}
              />
            </View>

            <View style={styles.button}>
              <Button
                onPress={() =>
                  navigate("ChapterGroup", {
                    title: strings.Kaamaththuppaal,
                    no: 3
                  })
                }
                title={strings.Kaamaththuppaal}
              />
            </View>
          </View>
        </SafeAreaView>
        <StatusBar barStyle="default" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "column"
  },
  icon: {
    width: 24,
    height: 24
  },
  button: {
    padding: 20
  }
});
