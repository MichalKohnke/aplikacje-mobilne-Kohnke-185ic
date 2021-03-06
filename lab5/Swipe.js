import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";
export default function Swipe() {
const [items, setItems] = useState(
new Array(8).fill(null).map((v, id) => ({ id, name: "Swipe Me" }))
);
function onSwipe(id) {
return () => {
	setItems(items.filter(item => item.id !== id));
};
}
return (
<View style={styles.container4}>
{items.map(item => (
<Swipeable key={item.id} onSwipe={onSwipe(item.id)}
name={item.name} />
))}
</View>
);
}

Swipe.navigationOptions = {
  title: "Swipe"
};