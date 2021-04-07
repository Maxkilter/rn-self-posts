import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam("postId");

  const removeHandler = () => {
    Alert.alert(
      "Post Deleting",
      "Are you sure you want to delete this post?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {},
        },
        {
          text: "Ok",
          style: "ok",
          onPress: () => {},
        },
      ],
      { cancelable: false }
    );
  };

  const post = DATA.find((p) => p.id === postId);

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text>{post.text}</Text>
      </View>
      <View style={styles.btn}>
        <Button
          size="small"
          title="Delete"
          onPress={removeHandler}
          color={THEME.DANGER_COLOR}
        />
      </View>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const iconName = booked ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
    headerStyle: {
      backgroundColor: THEME.SECOND_HEADER_COLOR,
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take Photo"
          iconName={iconName}
          onPress={() => console.log("Press photo")}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderColor: "red",
  },
  textWrap: {
    padding: 8,
  },
  title: {
    fontFamily: "open-regular",
  },
  btn: {
    width: "40%",
    alignSelf: "center",
  },
});
