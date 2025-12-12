import { router } from "expo-router";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddKirjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää kirja</Text>
      <Text style={DefaultStyle.text}>Kirjan nimi</Text>
      <Text style={DefaultStyle.text}>Kirjailija</Text>
      <Text style={DefaultStyle.text}>Vuosi</Text>
      <Text style={DefaultStyle.text}>Arvosana</Text>
      <Text style={DefaultStyle.text}>Luettu/ei luettu</Text>
      <Text style={DefaultStyle.text}>Viimeksi luettu</Text>

      <BackButton onPress={() => router.push("/Kirjat")} />
    </View>
  );
}