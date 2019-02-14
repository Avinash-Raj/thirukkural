import React, { Component } from "react";
import { connect } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-navigation";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  StatusBar,
  Modal,
  Alert,
  TouchableHighlight
} from "react-native";
import strings from "../strings";
import { updateSectionId } from "../actions/fetch-data/fetch-data";

class HomeScreen extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  componentDidMount() {
    this.props.navigation.setParams({
      openModal: this.modal.bind(this)
    });
  }
  modal() {
    this.setModalVisible(true);
  }
  static navigationOptions = ({ navigation }) => ({
    headerTitle: strings.appname,
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="move-to-inbox"
        size={24}
        style={{ color: tintColor }}
      />
    ),
    headerRight: (
      <MaterialIcons
        style={{ marginRight: 10, padding: 10 }}
        // color={colors.tintColor}
        onPress={() => {
          navigation.state.params.openModal();
        }}
        name="language"
        size={24}
      />
    )
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <SafeAreaView
          style={{
            marginTop: 50,
            flex: 1
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={() => {
                  this.props.updateSectionId(1);
                  navigate("ChapterGroup", {
                    title: strings.araththuppaal,
                    no: 1
                  });
                }}
                title={strings.araththuppaal}
              />
            </View>

            <View style={styles.button}>
              <Button
                onPress={() => {
                  this.props.updateSectionId(2);
                  navigate("ChapterGroup", { title: strings.porutpaal, no: 2 });
                }}
                title={strings.porutpaal}
              />
            </View>

            <View style={styles.button}>
              <Button
                onPress={() => {
                  this.props.updateSectionId(3);
                  navigate("ChapterGroup", {
                    title: strings.Kaamaththuppaal,
                    no: 3
                  });
                }}
                title={strings.Kaamaththuppaal}
              />
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
        <StatusBar barStyle="default" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "column"
  },
  icon: {
    width: 24,
    height: 24
  },
  button: {
    padding: 20
  }
});

const mapDispatchToProps = dispatch => ({
  updateSectionId: sectionId => {
    dispatch(updateSectionId(sectionId));
  }
});
const HomeScreenContainer = connect(
  null,
  mapDispatchToProps
)(HomeScreen);

export default HomeScreenContainer;
