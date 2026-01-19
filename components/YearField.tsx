import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// Tarvitaan, jotta TextField-komponentille voidaan määrittää vahvat tyypit.
// Tämä auttaa TypeScriptiä varmistamaan, että komponentti saa oikeanlaiset propsit
type YearFieldProps = {
  value: string;
  onChange: any;
};

export default function YearField({ value, onChange }: YearFieldProps) {
  const handleNumberChange = (text: any) => {
    if (!isNaN(text)) {
      onChange(text);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        keyboardType="numeric"
        maxLength={4}
        value={value}
        onChangeText={handleNumberChange}
        style={styles.input}
        placeholder="Vuosi"
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
    backgroundColor: "#DDDDE0", // vaaleanharmaa tausta
    borderRadius: 12, // pyöristetyt kulmat
    borderWidth: 1,
    borderColor: "#67788C", // tummanharmaa border
    fontSize: 16,
    color: "#67788C", // tummanharmaa teksti
  },
});
