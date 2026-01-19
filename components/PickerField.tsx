import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Text, View } from "react-native";

type PickerFieldProps = {
  value: any;
  onChange: any;
  text: string;
};

export default function PickerField({
  value,
  onChange,
  text,
}: PickerFieldProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
      <Picker
        selectedValue={value}
        onValueChange={(onTaiEi) => onChange(onTaiEi)}
        style={styles.picker}
      >
        <Picker.Item label="Ei" value="Ei" />
        <Picker.Item label="Kyllä" value="Kyllä" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    flex: 1,
    padding: 14,
    backgroundColor: "#DDDDE0",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#67788C",
    fontSize: 16,
    color: "#67788C88",
  },
  picker: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 100, // Adjust width as needed
    backgroundColor: "transparent",
  },
});
