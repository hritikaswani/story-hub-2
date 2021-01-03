import * as React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  retriveStories = async () => {
    const storyRef = db.collection("Book").doc("B001");
    const collections = await storyRef.listCollections();
    collections.forEach((collection) => {
      console.log(collection.id);
    });
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <SearchBar
          style={{ marginTop: 10 }}
          placeholder="Type Here..."
          onChangeText={(this.updateSearch, this.retriveStories)}
          value={search}
        />
        {/* <Text>{this.retriveStories}</Text> */}
      </View>
    );
  }
}
