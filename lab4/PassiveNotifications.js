import React, { useState } from "react";
import { Text, View } from "react-native";
import Notification from "./Notification";
import Activity from "./Activity";
import styles from "./styles";
export default function PassiveNotifications() {
const [count, setCount] = useState(0);
const [message, setMessage] = useState(null);

const [fetching, setFetching] = useState(false);
const [promise, setPromise] = useState(Promise.resolve());
function onPress() {
setPromise(
new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
setFetching(false);
})
);
setFetching(true);
}

return (

<View style={styles.container4}>
<View style={styles.container5}>
<Activity visible={fetching} />
<Text onPress={onPress}>Załaduj</Text>
</View>


<Notification message={message} />
<Text
onPress={() => {
setCount(count + 1);
setMessage(null);
}}
>
Naciśnij {count}
</Text>
<Text
onPress={() => {
setMessage("Coś się stało!");
}}
>
Pokaż powiadomienie
</Text>
</View>
);
}

PassiveNotifications.navigationOptions = {
  title: "PassiveNotifications"
};