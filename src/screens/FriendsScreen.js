import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View, Button } from "react-native";

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "green"
    },
    headerTitle: "Home",
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons name="alarm" size={24} style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
        <Button
          title="Back to home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
