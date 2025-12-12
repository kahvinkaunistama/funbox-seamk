import { router } from "expo-router";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddPelit() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää Peli</Text>
      <Text style={DefaultStyle.text}>Pelin nimi</Text>
      <Text style={DefaultStyle.text}>Valmistaja</Text>
      <Text style={DefaultStyle.text}>Vuosi</Text>
      <Text style={DefaultStyle.text}>Arvosana</Text>
      <Text style={DefaultStyle.text}>Pelattu/ei pelattu</Text>
      <Text style={DefaultStyle.text}>Viimeksi pelattu</Text>
      

      <BackButton onPress={() => router.push("/Pelit")} />
    </View>
  );
}