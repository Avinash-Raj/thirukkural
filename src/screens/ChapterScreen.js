import React, { Component } from "react";
import { ScrollView, Button } from "react-native";
import ChapterListComponent from "../components/ChapterListComponent";

// each chapter screen which list
export default class ChapterScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`
    };
  };

  render() {
    return (
      <ScrollView>
        <ChapterListComponent />
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </ScrollView>
    );
  }
}
