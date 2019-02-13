import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import { withNavigation } from "react-navigation";
import {
  getChapterGroups,
  updateChapterGroupNumber
} from "../actions/fetch-data/fetch-data";

class ChapterGroupListComponent extends Component {
  componentDidMount() {
    this.props.getChapterGroups(this.props.sectionId);
  }

  render() {
    const groups = this.props.chapterGroups.map((group, id) => (
      <View style={{ padding: 10 }} key={group.number}>
        <Button
          onPress={() => {
            this.props.updateChapterGroupNumber(group.number);
            this.props.navigation.navigate("Chapter");
          }}
          title={group.name}
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
  updateChapterGroupNumber: groupNumber => {
    dispatch(updateChapterGroupNumber(groupNumber));
  },
  getChapterGroups: sectionId => {
    dispatch(getChapterGroups(sectionId));
  }
});
const ChapterGroupListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChapterGroupListComponent);

export default withNavigation(ChapterGroupListContainer);
