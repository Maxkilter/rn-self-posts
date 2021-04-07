import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { THEME } from "../theme";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {
  AboutScreen,
  CreateScreen,
  FavoritesScreen,
  MainScreen,
  PostScreen,
} from "../screens";
import { createDrawerNavigator } from "react-navigation-drawer";

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? THEME.MAIN_COLOR : THEME.WHITE_COLOR,
    },
    headerTintColor:
      Platform.OS === "android" ? THEME.WHITE_COLOR : THEME.MAIN_COLOR,
  },
};
const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: FavoritesScreen,
    Post: PostScreen,
  },
  navigatorOptions
);

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: "All",
      tabBarIcon: (info) => (
        <Ionicons name="ios-albums" size={25} color={info.tintColor} />
      ),
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (info) => (
        <Ionicons name="ios-star" size={25} color={info.tintColor} />
      ),
    },
  },
};

const BottomNavigator =
  Platform.OS === "ios"
    ? createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR,
        },
      })
    : createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: THEME.WHITE_COLOR,
        shifting: true,
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
      });

const AboutNavigator = createStackNavigator(
  { About: AboutScreen },
  navigatorOptions
);

const CreateNavigator = createStackNavigator(
  { Create: CreateScreen },
  navigatorOptions
);

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: "Main",
        drawerIcon: <Ionicons name="ios-star" />,
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: "About app",
      },
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: "Create new post",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: "open-bold",
        fontSize: 18,
      },
    },
  }
);

export const AppNavigation = createAppContainer(MainNavigator);
