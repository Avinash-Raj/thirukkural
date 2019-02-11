import React, { Component } from "react";
import { ScrollView, Button } from "react-native";
import ChapterListComponent from "../components/ChapterListComponent";

// each chapter screen which list
export default class ChapterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <ChapterListComponent />
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </ScrollView>
    );
  }
}
