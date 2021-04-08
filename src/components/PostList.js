import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Post } from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/actions/postActions";

export const PostList = ({ navigation, isBooked }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.posts.allPosts);
  const bookedPosts = useSelector((state) => state.posts.bookedPosts);

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
        data={isBooked ? bookedPosts : allPosts}
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
