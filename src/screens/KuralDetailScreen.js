import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

export default class KuralDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: `${state.params.title}`
    };
  };
  renderDetails() {
    let detail = this.props.navigation.state.params.details;
    if (this.props.lang === "en") {
      return (
        <View>
          <Text>
            {detail.Translation} {"\n"}
          </Text>
          <Text>
            Explanation: {detail.explanation} {"\n"}
          </Text>
          <Text>
            Couplet: {detail.couplet} {"\n"}
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>
            {detail.Line1}
            {"\n"}
            {detail.Line2}
          </Text>
          <Text>
            mv: {detail.mv} {"\n"}
          </Text>
          <Text>
            sp: {detail.sp} {"\n"}
          </Text>
          <Text>
            mk: {detail.mk} {"\n"}
          </Text>
        </View>
      );
    }
  }
  render() {
    return <ScrollView>{this.renderDetails()}</ScrollView>;
  }
}
