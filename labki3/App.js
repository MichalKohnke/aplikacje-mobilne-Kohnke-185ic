import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import ListContainer from "./ListContainer";
import ListContainerLazy from "./ListContainerLazy";
import StepProgress from "./StepProgress";

const { createNavigator } = Platform.select({
  ios: { createNavigator: createDrawerNavigator },
  android: { createNavigator: createBottomTabNavigator }
});

export default createAppContainer(
  createNavigator({ ListContainer, ListContainerLazy, StepProgress }, { initialRouteName: "ListContainer" })
);