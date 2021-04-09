import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { View, StyleSheet, Image, Button, Alert } from "react-native";

const askForPermissions = async () => {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );
  if (status !== "granted") {
    Alert.alert("Error", "You didn't provide permission for the camera using.");
    return false;
  }
  return true;
};

export const PhotoPicker = ({ setImageUri, imageUri }) => {
  const takePhoto = async () => {
    const hasPermissions = await askForPermissions();
    if (!hasPermissions) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });
    setImageUri(img.uri);
  };

  return (
    <View>
      <Button title="Take a picture" onPress={takePhoto} />
      {!!imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
  },
});
