import React, { useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity, Alert  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./styles";


export default function DateTime({ navigation }) {



    const [date, setDate] = useState(new Date(1598051730000));
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
	
	const createTwoButtonAlert = () =>
    Alert.alert(
      "Wybrana data:",
      `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`,

      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
          const currentDate = selectedValue  || new Date();
          setDate(currentDate);
          setMode('time');
          setShow(Platform.OS !== 'ios');
        } else {
          const selectedTime = selectedValue || new Date();
          setTime(selectedTime);
          setShow(Platform.OS === 'ios');
          setMode('date');
        }
      };
      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };

      const showDatepicker = () => {
        showMode('date');
      };

    return (
        <View style={{ marginTop: 100 }}>
        <TouchableOpacity onPress={showDatepicker}>
			<View>
                <Button onPress={showDatepicker} title="wybranie daty"/>
            </View>
			<Button title="wyświetl date alert" onPress={createTwoButtonAlert}/>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
          />
        )}
      </View>

    );
}
const formatDate = (date, time) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  }
DateTime.navigationOptions = {
    title: "DateTime"
};