import { router } from "expo-router";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import HomeButton from "../components/HomeButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function Sarjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Sarjat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta katsomiasi sarjoja</Text>

      <AddButton onPress={() => router.push("/AddSarjat")} />
      <HomeButton onPress={() => console.log("Home Clicked.")} />
    </View>
  );
}