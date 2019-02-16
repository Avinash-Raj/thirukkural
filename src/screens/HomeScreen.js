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
  Picker,
  TouchableHighlight
} from "react-native";
import Modal from "react-native-modal";
import SplashScreen from "react-native-splash-screen";
import strings from "../strings";
import { updateSectionId, updateLanguage } from "../actions";

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
    // SplashScreen.hide();
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  }
  modal() {
    this.setModalVisible(true);
  }
  static navigationOptions = ({ navigation }) => ({
    headerTitle: strings.appname,
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    },
    headerRight: (
      <MaterialIcons
        style={{ marginRight: 10, padding: 10 }}
        onPress={() => {
          navigation.state.params.openModal();
        }}
        name="language"
        size={24}
      />
    )
  });

  changeThisTitle = () => {
    const { setParams } = this.props.navigation;
    setParams({ title: strings.appname });
  };

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
            isVisible={this.state.modalVisible}
            onBackdropPress={() => this.setModalVisible(false)}
          >
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.headerText}>Choose Language</Text>
              </View>
              <Picker
                mode="dropdown"
                selectedValue={this.props.lang}
                style={{ height: 50, width: 120, padding: 10 }}
                onValueChange={(itemValue, itemIndex) => {
                  strings.setLanguage(itemValue);
                  this.props.updateLanguage(itemValue);
                  this.changeThisTitle();
                }}
              >
                <Picker.Item label="தமிழ்" value="ta" />
                <Picker.Item label="English" value="en" />
              </Picker>
              <Button
                style="{{ marginLeft: 10, }}"
                onPress={() => {
                  this.setModalVisible(false);
                }}
                title="OK"
              />
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
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: "grey"
  },
  modalHeader: {
    justifyContent: "center",
    borderColor: "grey",
    padding: 10
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
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

const mapStateToProps = state => {
  let { lang } = state.details;
  if (strings.getLanguage() !== lang) {
    strings.setLanguage(lang);
  }
  return {
    lang: lang
  };
};
const mapDispatchToProps = dispatch => ({
  updateSectionId: sectionId => {
    dispatch(updateSectionId(sectionId));
  },
  updateLanguage: lang => {
    dispatch(updateLanguage(lang));
  }
});
const HomeScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

export default HomeScreenContainer;
