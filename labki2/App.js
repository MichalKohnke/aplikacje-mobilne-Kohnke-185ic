import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import SpreadOp from "./SpreadOp";
import RestPam from "./RestPam";
import Hook from "./Hook";

const { createNavigator } = Platform.select({
  ios: { createNavigator: createDrawerNavigator },
  android: { createNavigator: createBottomTabNavigator }
});

export default createAppContainer(
  createNavigator({ SpreadOp, RestPam, Hook }, { initialRouteName: "SpreadOp" })
);