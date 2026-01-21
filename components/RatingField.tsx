import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

// Tarvitaan, jotta TextField-komponentille voidaan määrittää vahvat tyypit.
// Tämä auttaa TypeScriptiä varmistamaan, että komponentti saa oikeanlaiset propsit
type RatingFieldProps = {
  value: any;
  onChange: any;
};

export default function RatingField({ value, onChange }: RatingFieldProps) {
  const handleNumberChange = (text: any) => {
    // Salli vain numerot
    if (!isNaN(text)) {
      let num = Number(text);
      if (num > 10) {
        num = 10;
      }
      if (text === "") {
        num = 0;
      }
      onChange(num > 0 ? String(num) : "");
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        keyboardType="numeric"
        maxLength={2}
        value={value}
        onChangeText={handleNumberChange}
        style={styles.input}
        placeholder="Arvosana (1-10)"
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
