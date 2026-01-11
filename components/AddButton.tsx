import { Pressable, Text } from "react-native";
import AddButtonStyle from "../styles/AddButtonStyle";

type AddButtonProps = {
  onPress: () => void;
  icon?: string; // voit lisätä tulevaisuudessa ikonikirjaston
};

export default function AddButton({ onPress, icon = "+" }: AddButtonProps) {
  return (
    <Pressable 
    onPress={onPress}
    style={({ pressed }) => [
    AddButtonStyle.fab,
    pressed && AddButtonStyle.pressed,
    ]}
    >
      <Text style={AddButtonStyle.fabText}>{icon}</Text>
    </Pressable>
  );
}