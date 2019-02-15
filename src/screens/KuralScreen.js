import React, { Component } from "react";
import { ScrollView, Text, Button } from "react-native";
import KuralListComponent from "../components/KuralListComponent";

// each chapter group screen which lists chapters
export default class KuralScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`
    };
  };

  render() {
    return (
      <ScrollView>
        <KuralListComponent />
      </ScrollView>
    );
  }
}
