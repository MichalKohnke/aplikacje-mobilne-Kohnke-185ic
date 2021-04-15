import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import LoadingImage from "./LoadingImage"
import Resizing from "./Resizing";
import LazyLoading from "./LazyLoading";
import StateNetwork from "./StateNetwork";
import StoringData from "./StoringData";
import Synchronizing from "./Synchronizing";

const { createNavigator } = Platform.select({
  ios: { createNavigator: createDrawerNavigator },
  android: { createNavigator: createBottomTabNavigator }
});

export default createAppContainer(
  createNavigator({ LoadingImage, Resizing, LazyLoading, StateNetwork, StoringData, Synchronizing }, { initialRouteName: "LoadingImage" })
);