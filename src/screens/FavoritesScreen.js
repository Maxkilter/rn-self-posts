import React from "react";
import { AppHeaderIcon, PostList } from "../components";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

export const FavoritesScreen = ({ navigation }) => (
  <PostList navigation={navigation} isBooked />
);

FavoritesScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Bookmarked",
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
