import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { Post } from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/actions/postActions";
import { THEME } from "../theme";

export const PostList = ({ navigation, isBooked }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.posts.allPosts);
  const bookedPosts = useSelector((state) => state.posts.bookedPosts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const isNoPosts = isBooked ? !bookedPosts.length : !allPosts.length;

  const goToPost = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={THEME.MAIN_COLOR} size="large" />
      </View>
    );
  }

  if (isNoPosts) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>There is no posts</Text>
      </View>
    );
  }

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
  text: {
    fontFamily: "open-regular",
    fontSize: 20,
    textAlign: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
