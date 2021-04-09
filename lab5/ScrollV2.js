import React from "react";
import {
Text,
ScrollView,
ActivityIndicator,
Switch,
View
} from "react-native";
import styles from "./styles";
export default function ScrollV2() {
return (
<View style={styles.container2}>
<ScrollView style={styles.scroll}>
{new Array(12).fill(null).map((v, i) => (
<View key={i}>
<Text style={[styles.scrollItem, styles.text2]}>Some text</Text>
<ActivityIndicator color="blue" size="large" />
</View>
))}
</ScrollView>
</View>
);
}

ScrollV2.navigationOptions = {
  title: "ScrollV2"
};