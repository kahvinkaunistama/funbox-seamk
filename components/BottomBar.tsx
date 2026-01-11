import BottomBarStyle from "@/styles/BottomBarStyle";
import { usePathname, useRouter } from "expo-router";
import { Pressable, Text, View } from 'react-native';
import DefaultStyle from "../styles/DefaultStyle";

export default function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route:string) => pathname === route;

  return (
    <View style={BottomBarStyle.container}>
      <Pressable
      onPress={() => router.push("/Kirjat")}
      style={({ pressed }) => [
        BottomBarStyle.button,
        pressed && DefaultStyle.pressed,
        isActive("/Kirjat") && DefaultStyle.active,  
        ]} >
        <Text style={BottomBarStyle.text}>Kirjat</Text>
      </Pressable>

      <Pressable
      onPress={() => router.push("/Sarjat")}
      style={({ pressed }) => [
        BottomBarStyle.button,
        pressed && DefaultStyle.pressed,
        isActive("/Sarjat") && DefaultStyle.active,  
        ]} >
        <Text style={BottomBarStyle.text}>Sarjat</Text>
      </Pressable>

      <Pressable
      onPress={() => router.push("/Elokuvat")}
      style={({ pressed }) => [
        BottomBarStyle.button,
        pressed && DefaultStyle.pressed,
        isActive("/Elokuvat") && DefaultStyle.active,  
        ]} >
        <Text style={BottomBarStyle.text}>Elokuvat</Text>
      </Pressable>

      <Pressable
      onPress={() => router.push("/Pelit")}
      style={({ pressed}) => [
        BottomBarStyle.button,
        pressed && DefaultStyle.pressed,
        isActive("/Pelit") && DefaultStyle.active,  
        ]} >
        <Text style={BottomBarStyle.text}>Pelit</Text>
      </Pressable>
    </View>
  );
}