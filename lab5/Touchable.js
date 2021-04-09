import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Button from "./Button";
export default function Touchable() {
return (
<View style={styles.container3}>
<Button onPress={() => {}} label="Opacity" />
<Button onPress={() => {}} label="Highlight" touchable="highlight" />
</View>
);
}

Touchable.navigationOptions = {
  title: "Touchable"
};