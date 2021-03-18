import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";
import ProgressBar from "./ProgressBar";

export default function Third() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#0000ff" />
    </View>
  );
}

Third.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.progress}>
      <Text style={styles.title}>Third</Text>
      <ProgressBar
        label={false}
        progress={navigation.state.params.progress(navigation.state.routeName)}
      />
    </View>
  ),
  headerLeft: (
    <Text
      onPress={() => navigation.navigate("Second", navigation.state.params)}
    >
      Second
    </Text>
  ),
  headerRight: (
    <Text
      onPress={() => navigation.navigate("First", navigation.state.params)}
    >
      First
    </Text>
  )
});