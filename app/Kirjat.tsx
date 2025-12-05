import { router } from "expo-router";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import BackButton from "../components/HomeButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function Kirjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Kirjat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta lukemiasi kirjoja</Text>

      <AddButton onPress={() => router.push("/AddKirjat")} />
      <BackButton onPress={() => router.push("/Kirjat")} />
    </View>
  );
}