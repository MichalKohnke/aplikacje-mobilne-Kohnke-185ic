import React, { useState } from "react";
import { View, Modal, Text } from "react-native";
import styles from "./styles";
import Switch from "./Switch";

const min = 0;
const max = 1000;

export default function EkrSwitch() {
const [first, setFirst] = useState(false);
const [second, setSecond] = useState(false);
const [showModal, setShowModal] = useState(false);
return (
<View style={styles.container3}>
<Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal został zamknięty.');
          }}>

          <View style={styles.modal}>
            <Text>{(Math.floor(Math.random() * (max - min)) + min)}</Text>
            <Switch
              label="Kliknij, aby zamknąć Modal!"
              onValueChange={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>

        <Switch
          label="Kliknij, aby otworzyć Modal!"
          onValueChange={() => {
            setShowModal(!showModal);
          }}
        />

</View>
);
}
EkrSwitch.navigationOptions = {
  title: "EkrSwitch"
};