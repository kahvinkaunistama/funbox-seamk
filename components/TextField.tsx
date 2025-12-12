import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// Tarvitaan, jotta TextField-komponentille voidaan määrittää vahvat tyypit.
// Tämä auttaa TypeScriptiä varmistamaan, että komponentti saa oikeanlaiset propsit
type TextFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function TextField({ value, onChangeText, placeholder }: TextFieldProps) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText} 
        placeholder={placeholder}
        placeholderTextColor="#67788C88" // tummanharmaa, 50% läpinäkyvä
      />
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
    backgroundColor: "#DDDDE0",  // vaaleanharmaa tausta
    borderRadius: 12,            // pyöristetyt kulmat
    borderWidth: 1,
    borderColor: "#67788C",      // tummanharmaa border
    fontSize: 16,
    color: "#67788C",            // tummanharmaa teksti
  },
});
