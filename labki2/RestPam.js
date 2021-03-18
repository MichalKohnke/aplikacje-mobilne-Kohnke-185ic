import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function RestPam({ navigation }) {
  return (
    <View style={styles.container_rest}>
		<Text style={styles.text_rest1}>REST PARAMETERS</Text>
		<Text style={styles.text_rest2}>Identycznie jak spread syntax wygląda rest parameter, różnicą jest miejsce użycia - w tym przypadku jako parametr funkcji.</Text>
    </View>
  );
}

RestPam.navigationOptions = {
  title: "RestPam"
};