import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import strings from "../strings";

const UraiComponent = ({ writer, content }) => (
  <Text style={styles.explanation}>
    <Text style={styles.bold}>{writer} : </Text> {content} {"\n"}
  </Text>
);

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
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={styles.kural}>உரைகள்</Text>
          </View>
          <View>
            <UraiComponent writer={strings.writers.mv} content={detail.mv} />
            <UraiComponent
              writer={strings.writers.munu}
              content={detail.munu}
            />
            <UraiComponent writer={strings.writers.sp} content={detail.sp} />
            <UraiComponent writer={strings.writers.mk} content={detail.mk} />
            <UraiComponent
              writer={strings.writers.pari}
              content={detail.pari}
            />
            <UraiComponent
              writer={strings.writers.mani}
              content={detail.mani}
            />
          </View>
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
  explanation: { padding: 5 }
});
