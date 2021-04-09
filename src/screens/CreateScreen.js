import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components";
import { useDispatch } from "react-redux";
import { createPost } from "../store/actions/postActions";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const dispatch = useDispatch();

  const onSaveHandler = () => {
    navigation.navigate("Main");
    dispatch(
      createPost({
        date: new Date().toJSON(),
        text,
        booked: false,
        img: imageUri,
      })
    );
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create new post</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Type text here..."
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker setImageUri={setImageUri} imageUri={imageUri} />
          <View style={styles.btn}>
            <Button
              title="Crate post"
              onPress={onSaveHandler}
              disabled={!text || !imageUri}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Create post",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="About App"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-regular",
    textAlign: "center",
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: 200,
    marginBottom: 8,
  },
  btn: {
    marginTop: 8,
  },
});
