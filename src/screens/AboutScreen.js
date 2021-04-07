import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components";

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>This is very useful app for posts creating</Text>
      <Text>
        App version <Text style={styles.version}>1.0.0</Text>
      </Text>
    </View>
  );
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "About app",
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
  version: {
    fontFamily: "open-bold",
  },
});
