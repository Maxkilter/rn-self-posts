import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components";

export const CreateScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Create Screen</Text>
    </View>
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
