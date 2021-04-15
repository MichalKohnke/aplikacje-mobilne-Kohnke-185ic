import React, { useState } from "react";
import { View, Text, Image, Slider } from "react-native";
import styles from "./styles";

export default function Resizing() {
  const source = require("./images/relay.jpg");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  return (
    <View style={styles.container}>
      <Image source={source} style={{ width, height }} />
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Slider
        style={styles.slider}
        minimumValue={50}
        maximumValue={380}
        value={width}
        onValueChange={value => {
          setWidth(value);
          setHeight(value);
        }}
      />
    </View>
  );
}

Resizing.navigationOptions = {
  title: "Resizing"
};