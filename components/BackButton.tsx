import { Pressable, Text } from "react-native";
import BackButtonStyles from "../styles/BackButtonStyles";
import DefaultStyle from "../styles/DefaultStyle";

type BackButtonProps = {
  onPress: () => void;
  icon?: string; // voit lisätä tulevaisuudessa ikonikirjaston
};

export default function BackButton({onPress, icon = "<<<" }: BackButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        BackButtonStyles.fab,
        pressed && DefaultStyle.pressed,
      ]} >
      
      <Text style={BackButtonStyles.fabText}>{icon}</Text>
    </Pressable>
  );
}
