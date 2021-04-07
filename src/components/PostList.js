import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { DATA } from "../data";
import { Post } from "./Post";

export const PostList = ({ navigation, isBooked }) => {
  const posts = isBooked ? DATA.filter((post) => post.booked) : DATA;
  const goToPost = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return (
    <View style={styles.center}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => {
          return <Post post={item} onOpen={goToPost} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    margin: 8,
  },
});
