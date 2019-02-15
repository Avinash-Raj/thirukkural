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
    if (this.props.navigation.state.params.lang === "en") {
      return (
        <View style={styles.container}>
          <Text style={styles.kural}>
            {detail.couplet} {"\n"}
          </Text>
          <Text style={styles.explanation}>
            <Text style={styles.bold}>Translation : </Text>
            {detail.Translation} {"\n"}
          </Text>
          <Text style={styles.explanation}>
            <Text style={styles.bold}>Explanation : </Text> {detail.explanation}{" "}
            {"\n"}
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
            <Text style={styles.bold}>மு.வரதராசனார் : </Text> {detail.mv} {"\n"}
          </Text>
          <Text style={styles.explanation}>
            <Text style={styles.bold}>சாலமன் பாப்பையா : </Text> {detail.sp}
            {"\n"}
          </Text>
          <Text style={styles.explanation}>
            <Text style={styles.bold}>மு. கருணாநிதி : </Text> {detail.mk} {"\n"}
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
  kural: { padding: 10, fontSize: 16, fontWeight: "bold" },
  bold: { fontSize: 16, fontWeight: "bold" },
  explanation: { padding: 10 }
});
