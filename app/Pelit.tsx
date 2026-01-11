import { router } from "expo-router";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function Pelit() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Pelit</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta pelaamiasi pelejä</Text>

      <AddButton onPress={() => router.push("/AddPelit")} />
    </View>
  );
}