import React, { Component } from "react";
import { View, Text, Button } from "react-native";

// each chapter group screen which lists chapters
export default class KuralScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> KuralSCreen </Text>
        <Button
          onPress={() => this.props.navigation.navigate("KuralDetail")}
          title="Kural list"
        />
      </View>
    );
  }
}
