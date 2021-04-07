import React from "react";
import { AppHeaderIcon, PostList } from "../components";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const MainScreen = ({ navigation }) => (
  <PostList navigation={navigation} />
);

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "My Blog",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take Photo"
        iconName="ios-camera"
        onPress={() => navigation.push("Create")}
      />
    </HeaderButtons>
  ),
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
