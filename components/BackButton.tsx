import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";
import BackButtonStyles from "../styles/BackButtonStyles";
import DefaultStyle from "../styles/DefaultStyle";

type BackButtonProps = {
  onPress: () => void;
  iconName?: keyof typeof Entypo.glyphMap; // voit lisätä tulevaisuudessa ikonikirjaston
};

export default function BackButton({onPress, iconName = "arrow-left" }: BackButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        BackButtonStyles.fab,
        pressed && DefaultStyle.pressed,
      ]} >
      
      <Entypo name={iconName} size={32} color="#67788C" />
    </Pressable>
  );
}
