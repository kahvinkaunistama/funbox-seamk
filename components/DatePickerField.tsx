import { Entypo } from "@expo/vector-icons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

// Tarvitaan, jotta TextField-komponentille voidaan määrittää vahvat tyypit.
// Tämä auttaa TypeScriptiä varmistamaan, että komponentti saa oikeanlaiset propsit
type DatePickerProps = {
  value: string;
  onChange: any;
  placeHolderText: string;
  clearText: any;
};

export default function DatePickerField({
  value,
  onChange,
  placeHolderText,
  clearText,
}: DatePickerProps) {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChangeDate = (event: any, selectedDate: any) => {
    setDate(selectedDate);
    onChange(selectedDate.toISOString().split("T")[0]); // YYYY-MM-DD
  };

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onChangeDate,
      mode: "date",
    });
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={showDatePicker}>
        <TextInput
          placeholder={placeHolderText}
          onChange={onChange}
          style={styles.input}
          value={value}
          editable={false}
          placeholderTextColor="#67788C88" // tummanharmaa, 50% läpinäkyvä
        />
      </Pressable>
      {value && (
        <Pressable onPress={clearText} style={styles.button}>
          <Entypo name="cross" size={32} color="#67788C88" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 14,
    backgroundColor: "#DDDDE0", // vaaleanharmaa tausta
    borderRadius: 12, // pyöristetyt kulmat
    borderWidth: 1,
    borderColor: "#67788C", // tummanharmaa border
    fontSize: 16,
    color: "#67788C", // tummanharmaa teksti
  },
  button: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 8,
    marginRight: 8,
  },
});
