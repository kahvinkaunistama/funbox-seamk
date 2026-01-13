import { router } from "expo-router";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import HomeButton from "@/components/HomeButton";

export default function Kirjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Kirjat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta lukemiasi kirjoja</Text>

      <AddButton onPress={() => router.push("/AddKirjat")} />
      <HomeButton />
    </View>
  );
}
