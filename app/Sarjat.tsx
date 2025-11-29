import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import HomeButton from "../components/HomeButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function Sarjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.title}>Tämä on sivu sarjoille.</Text>
      <Text style={DefaultStyle.title}>Tarkastele alta katsomiasi sarjoja:</Text>

      <AddButton onPress={() => console.log("Add Clicked.")} />
      <HomeButton onPress={() => console.log("Home Clicked.")} />
    </View>
  );
}