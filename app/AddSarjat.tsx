import { router } from "expo-router";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddSarjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää sarja</Text>
      <Text style={DefaultStyle.text}>Sarjan nimi</Text>
      <Text style={DefaultStyle.text}>Vuosi</Text>
      <Text style={DefaultStyle.text}>Arvosana</Text>
      <Text style={DefaultStyle.text}>Katsottu/ei katsottu</Text>
      <Text style={DefaultStyle.text}>Viimeksi katsottu</Text>

      <BackButton onPress={() => router.push("/Sarjat")} />
    </View>
  );
}