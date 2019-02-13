import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { getKurals } from "../actions/fetch-data/fetch-data";

class KuralListComponent extends Component {
  componentDidMount() {
    this.props.getKurals();
  }

  render() {
    const kurals = this.props.kurals.map(kural => (
      <View style={{ padding: 10 }} key={kural.number}>
        <Text
          onPress={() => {
            this.props.navigation.navigate("KuralDetail", {
              title: kural.number
            });
          }}
        >
          {kural.name}
        </Text>
      </View>
    ));
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <Text>Hi</Text>
        {kurals}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    kurals: state.details.kurals || []
  };
};
const mapDispatchToProps = dispatch => ({
  getKurals: () => {
    dispatch(getKurals());
  }
});
const KuralListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KuralListComponent);

export default withNavigation(KuralListContainer);
