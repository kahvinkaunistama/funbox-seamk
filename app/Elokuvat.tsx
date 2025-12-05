import { router } from "expo-router";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import HomeButton from "../components/HomeButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function Elokuvat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Elokuvat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta katsomiasi elokuvia</Text>

      <AddButton onPress={() => router.push("/AddElokuvat")} />
      <HomeButton onPress={() => console.log("Home Clicked.")} />
    </View>
  );
}