import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  onPress: () => void;
};

export default function LisaaTeos({ onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Lisää</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F9C3C3", // persikka
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
  text: {
    color: "#67788C", // tummanharmaa teksti
    fontSize: 16,
    fontWeight: "bold",
  },
});
