import React, { Component } from "react";
import { View, Button } from "react-native";
import { withNavigation } from "react-navigation";

class ChapterListComponent extends Component {
  state = { chapters: ["Chapter 1", "Chapter 2"] };
  render() {
    const chapters = this.state.chapters.map(chapterName => (
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

export default withNavigation(ChapterListComponent);
