import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import { withNavigation } from "react-navigation";
import {
  getChapters,
  updateChapterNoAndName
} from "../actions/fetch-data/fetch-data";

class ChapterListComponent extends Component {
  componentDidMount() {
    this.props.getChapters();
  }

  render() {
    const chapters = this.props.chapters.map(chapter => (
      <View style={{ padding: 10 }} key={chapter.number}>
        <Button
          onPress={() => {
            this.props.updateChapterNoAndName(chapter.kuralRange, chapter.name);
            this.props.navigation.navigate("Kural", { title: chapter.name });
          }}
          title={chapter.name}
        />
      </View>
    ));
    return <View style={{ flex: 1, padding: 10 }}>{chapters}</View>;
  }
}

const mapStateToProps = state => {
  return {
    chapters: state.details.chapters || []
  };
};
const mapDispatchToProps = dispatch => ({
  updateChapterNoAndName: (cno, cname) => {
    dispatch(updateChapterNoAndName(cno, cname));
  },
  getChapters: () => {
    dispatch(getChapters());
  }
});
const ChapterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChapterListComponent);

export default withNavigation(ChapterListContainer);
