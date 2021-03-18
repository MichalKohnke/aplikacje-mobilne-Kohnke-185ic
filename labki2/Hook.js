import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Hook({ navigation }) {
  return (
    <View style={styles.container_hook}>
		<Text style={styles.text_hook1}>HOOK USESTATE</Text>
		<Text style={styles.text_hook2}>Czym jest hook? Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym.
	  Kiedy powinno się korzystać z hooków? Jeśli po stworzeniu komponentu funkcyjnego zorientujesz się, że potrzebujesz przechować kilka wartości w stanie, dotychczas musiałeś zamienić taki komponent na klasę. Teraz możesz skorzystać z hooka z wewnątrz istniejącego komponentu funkcyjnego.</Text>
    </View>
  );
}

Hook.navigationOptions = {
  title: "Hook"
};