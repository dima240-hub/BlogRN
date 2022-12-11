import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Edit", { id: navigation.getParam("id") });
        }}
      >
        <Feather style={styles.icon} name="edit-2" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  icon: { fontSize: 30, right: 5 },
});
export default ShowScreen;
