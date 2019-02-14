import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

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
        <View style={styles.container}>
          <Text style={styles.kural}>
            {detail.Translation} {"\n"}
          </Text>
          <Text style={styles.explanation}>
            Explanation: {detail.explanation} {"\n"}
          </Text>
          <Text style={styles.explanation}>
            Couplet: {detail.couplet} {"\n"}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container} elevation={5}>
          <Text style={styles.kural}>
            {detail.Line1}
            {"\n"}
            {detail.Line2}
          </Text>
          <Text style={styles.explanation}>
            mv: {detail.mv} {"\n"}
          </Text>
          <Text style={styles.explanation}>
            sp: {detail.sp} {"\n"}
          </Text>
          <Text style={styles.explanation}>
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

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  kural: { padding: 10, fontSize: 15, fontWeight: "bold" },
  explanation: { padding: 10 }
});
