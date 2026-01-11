import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import AddButtonStyle from "../styles/AddButtonStyle";

type AddButtonProps = {
  onPress: () => void;
  iconName?: keyof typeof Entypo.glyphMap; // voit lisätä tulevaisuudessa ikonikirjaston
};

export default function AddButton({ onPress, iconName = "plus" }: AddButtonProps) {
  return (
    <Pressable 
    onPress={onPress}
    style={({ pressed }) => [
    AddButtonStyle.fab,
    pressed && AddButtonStyle.pressed,
    ]}
    >
      <Entypo name={iconName} size={36} color="#67788C" />
    </Pressable>
  );
}