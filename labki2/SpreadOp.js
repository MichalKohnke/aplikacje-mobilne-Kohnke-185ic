import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function SpreadOp({ navigation }) {
  return (
    <View style={styles.container_spr}>
		<Text style={styles.text_spr1}>SPREAD OPERATOR</Text>
		<Text style={styles.text_spr2}>Składnia rozwinięcia (ang. spread syntax) pozwala na rozwinięcie iterowalnego wyrażenia, takiego jak wyrażenie tablicowe lub ciąg znaków, tam gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji) lub elementów (dla literałów tablicowych). Pozwala również na rozwinięcie wyrażeń obiektowych w miejscach, gdzie oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektowych).</Text>
    </View>
  );
}

SpreadOp.navigationOptions = {
  title: "SpreadOp"
};