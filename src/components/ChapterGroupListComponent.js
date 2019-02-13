import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import { withNavigation } from "react-navigation";
import { getChapterGroups } from "../actions/fetch-data/fetch-data";

class ChapterGroupListComponent extends Component {
  componentDidMount() {
    this.props.getChapterGroups(this.props.sectionId);
  }

  render() {
    const groups = this.props.chapterGroups.map(groupName => (
      <View style={{ padding: 10 }} key={groupName.toString()}>
        <Button
          onPress={() => this.props.navigation.navigate("Chapter")}
          title={groupName}
        />
      </View>
    ));

    return <View style={{ flex: 1, padding: 10 }}>{groups}</View>;
  }
}

const mapStateToProps = state => {
  return {
    chapterGroups: state.details.chapterGroups || []
  };
};
const mapDispatchToProps = dispatch => ({
  getChapterGroups: sectionId => {
    dispatch(getChapterGroups(sectionId));
  }
});
const ChapterGroupListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChapterGroupListComponent);

export default withNavigation(ChapterGroupListContainer);
