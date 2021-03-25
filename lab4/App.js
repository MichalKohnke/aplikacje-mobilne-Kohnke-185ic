import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import TextInput from "./TextInput";
import SelectingOptions from "./SelectingOptions";
import EkrSwitch from "./EkrSwitch";
import DateTime from "./DateTime";
import PassiveNotifications from "./PassiveNotifications";

const { createNavigator } = Platform.select({
  ios: { createNavigator: createDrawerNavigator },
  android: { createNavigator: createBottomTabNavigator }
});

export default createAppContainer(
  createNavigator({ TextInput, SelectingOptions, EkrSwitch, DateTime, PassiveNotifications }, { initialRouteName: "TextInput" })
);