import React, { Component } from "react";
import { View, Button } from "react-native";
import { withNavigation } from "react-navigation";

class ChapterGroupListComponent extends Component {
  state = { chapterGroups: [] };
  fetchChapterGroups = sectionId => {
    console.log(sectionId);
    switch (sectionId) {
      case 1:
        return ["foo1", "bar1"];
      case 2:
        return ["foo2", "bar2"];
      case 3:
        return ["foo3", "bar3"];
    }
  };
  componentDidMount() {
    this.setState({
      chapterGroups: this.fetchChapterGroups(this.props.sectionId)
    });
  }
  render() {
    const groups = this.state.chapterGroups.map(groupName => (
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

export default withNavigation(ChapterGroupListComponent);
