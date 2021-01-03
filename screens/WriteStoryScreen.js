import * as React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  ToastAndroid,
  KeyboardAvoidingView,
} from "react-native";
import { Header } from "react-native-elements";
import * as firebase from "firebase";
import db from "../config";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      author: "",
      title: "",
      story: "",
    };
  }
  submit = async () => {
    db.collection("Book").add({
      Author: this.state.author,
      Title: this.state.title,
      Story: this.state.story,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Header
          backgroundColor={"#F2CEDF"}
          centerComponent={{
            text: "STORY HUB",
            style: { fontSize: 24 },
          }}
        ></Header>
        <TextInput
          style={styles.titleInput}
          placeholder="Title of the story"
          value={this.state.title}
          onChangeText={(title) => this.setState({ title })}
        />
        <TextInput
          style={styles.titleInput}
          placeholder="Author of the story"
          value={this.state.author}
          onChangeText={(author) => this.setState({ author })}
        />
        <TextInput
          style={styles.contentInput}
          placeholder="Content of the story"
          value={this.state.story}
          onChangeText={(story) => this.setState({ story })}
        />
        <TouchableOpacity
          style={{ backgroundColor: "#F2CEDF", margin: 150, width: 100 }}
          onPress={() => {
            this.submit();
            ToastAndroid.show(
              "Your Story has been submitted!",
              ToastAndroid.SHORT
            );
          }}
        >
          <Text style={{ fontSize: 24, textAlign: "center" }}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  titleInput: {
    borderWidth: 1.5,
    width: 380,
    marginLeft: 10,
    marginTop: 10,
  },
  contentInput: {
    borderWidth: 1.5,
    width: 380,
    marginLeft: 10,
    marginTop: 10,
    height: 200,
  },
});
