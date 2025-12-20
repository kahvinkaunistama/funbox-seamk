import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

type Props = {
  onPress: () => void;
  style?: ViewStyle | ViewStyle[]; 
};

export default function EmptyFields({ onPress, style }: Props) {
  return (
    <Pressable 
    style={({ pressed }) => [
        styles.button, style, pressed && styles.pressed ]}
        onPress={onPress}>
    <Text style={styles.text}>Tyhjennä</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#F9C3C3",
    borderRadius: 12,
    alignItems: "center",
    justifyContent:"center"
  },
  text: {
    color: "#67788C", 
    fontSize: 16,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.6,
  },
});
