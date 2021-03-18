import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import ProgressBar from "./ProgressBar";

export default function Second() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ff0000" />
    </View>
  );
}

Second.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.progress}>
      <Text style={styles.title}>Second</Text>
      <ProgressBar
        label={false}
        progress={navigation.state.params.progress(navigation.state.routeName)}
      />
    </View>
  ),
  headerLeft: (
    <Text onPress={() => navigation.navigate("First", navigation.state.params)}>
      First
    </Text>
  ),
  headerRight: (
    <Text onPress={() => navigation.navigate("Third", navigation.state.params)}>
      Third
    </Text>
  )
});