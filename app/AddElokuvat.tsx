import { Text, View } from "react-native";
import HomeButton from "../components/HomeButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddElokuvat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää elokuva</Text>
      <Text style={DefaultStyle.text}>ELokuvan nimi</Text>
      <Text style={DefaultStyle.text}>Vuosi</Text>
      <Text style={DefaultStyle.text}>Arvosana</Text>

      <HomeButton onPress={() => console.log("Home Clicked.")} />
    </View>
  );
}