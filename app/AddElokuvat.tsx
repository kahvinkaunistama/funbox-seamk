import { router } from "expo-router";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddElokuvat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää elokuva</Text>
      <Text style={DefaultStyle.text}>ELokuvan nimi</Text>
      <Text style={DefaultStyle.text}>Vuosi</Text>
      <Text style={DefaultStyle.text}>Arvosana</Text>

      <BackButton onPress={() => router.push("/Elokuvat")} />
    </View>
  );
}