import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import HomeButton from "../components/HomeButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function Kirjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Kirjat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta lukemiasi kirjoja</Text>

      <AddButton onPress={() => console.log("Add Clicked.")} />
      <HomeButton onPress={() => console.log("Home Clicked.")} />
    </View>
  );
}