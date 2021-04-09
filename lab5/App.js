import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import ScrollV1 from "./ScrollV1";
import ScrollV2 from "./ScrollV2";
import Touchable from "./Touchable";
import Swipe from "./Swipe";

const { createNavigator } = Platform.select({
  ios: { createNavigator: createDrawerNavigator },
  android: { createNavigator: createBottomTabNavigator }
});

export default createAppContainer(
  createNavigator({ ScrollV1, ScrollV2, Touchable, Swipe }, { initialRouteName: "ScrollV1" })
);