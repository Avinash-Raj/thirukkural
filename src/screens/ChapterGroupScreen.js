import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import ChapterGroupListComponent from "../components/ChapterGroupListComponent";

// screen which lists chapter group
export default class ChapterGroupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: params ? params.title : "",
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="alarm" size={24} style={{ color: tintColor }} />
      )
    };
  };
  render() {
    return (
      <ScrollView>
        <ChapterGroupListComponent
          sectionId={this.props.navigation.getParam("no")}
        />
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
  }
});
