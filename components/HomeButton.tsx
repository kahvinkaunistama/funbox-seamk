import { Entypo } from '@expo/vector-icons';
import { router } from "expo-router";
import { Pressable } from "react-native";
import DefaultStyle from "../styles/DefaultStyle";
import HomeButtonStyle from "../styles/HomeButtonStyle";

type EntypoName = keyof typeof Entypo.glyphMap;

type HomeButtonProps = {
  iconName?: EntypoName; // voit lisätä tulevaisuudessa ikonikirjaston
};

export default function HomeButton({iconName = "home" }: HomeButtonProps) {
  return (
    <Pressable
    onPress={() => { router.push("/");}}
    style={({ pressed }) => [
      HomeButtonStyle.fab,
      pressed && DefaultStyle.pressed,
    ]}>
      <Entypo name={iconName} size={32} color="#67788C" />
    </Pressable>
  );
}