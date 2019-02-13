import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import { withNavigation } from "react-navigation";

class ChapterListComponent extends Component {
  componentDidMount() {
    this.props.getChapterGroups(this.props.sectionId);
  }

  render() {
    const chapters = this.props.chapters.map(chapterName => (
      <View style={{ padding: 10 }} key={chapterName.toString()}>
        <Button
          onPress={() => this.props.navigation.navigate("Kural")}
          title={chapterName}
        />
      </View>
    ));
    return <View style={{ flex: 1, padding: 10 }}>{chapters}</View>;
  }
}

const mapStateToProps = state => {
  return {
    chapterGroups: state.details.chapters || []
  };
};
const mapDispatchToProps = dispatch => ({
  getChapterGroups: sectionId => {
    dispatch(getChapterGroups(sectionId));
  }
});
const ChapterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChapterListComponent);

export default withNavigation(ChapterListContainer);
