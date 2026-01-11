import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import DefaultStyle from "../styles/DefaultStyle";
import HomeButtonStyle from "../styles/HomeButtonStyle";

type HomeButtonProps = {
  icon?: string; // voit lisätä tulevaisuudessa ikonikirjaston
};

export default function HomeButton({icon = "H" }: HomeButtonProps) {
  return (
    <Pressable
    onPress={() => { router.push("/");}}
    style={({ pressed }) => [
      HomeButtonStyle.fab,
      pressed && DefaultStyle.pressed,
    ]}>
      <Text style={HomeButtonStyle.fabText}>{icon}</Text>
    </Pressable>
  );
}