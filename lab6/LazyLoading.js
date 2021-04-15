import React, { useState, useEffect } from "react";
import { View, Picker, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import iconNames from "./icon-names.json";
import LazyImage from "./LazyImage";
import Button from "./Button";

const remote =
  "https://facebook.github.io/react-native/docs/assets/favicon.png";

export default function LazyLoading() {
  const [source, setSource] = useState(null);
  const [selected, setSelected] = useState("Web Application Icons");
  const [listSource, setListSource] = useState([]);
  const categories = Object.keys(iconNames);

  function updateListSource(selected) {
    setListSource(iconNames[selected]);
    setSelected(selected);
  }

  useEffect(() => {
    updateListSource(selected);
  }, []);
  

  return (
    <View style={styles.container2}>
      <LazyImage
        style={{ width: 150, height: 70 }}
        resizeMode="contain"
        source={source}
      />
      <Button
        label="Load Remote"
        onPress={() => {
          setSource({ uri: remote });
        }}
      />
	  <Picker selectedValue={selected} onValueChange={updateListSource}>
          {categories.map(category => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
		<FlatList
        style={styles.icons}
        data={listSource.map((value, key) => ({ key: key.toString(), value }))}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name={item.value} style={styles.itemIcon} />
            <Text style={styles.itemText}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}
LazyLoading.navigationOptions = {
  title: "LazyLoading"
};