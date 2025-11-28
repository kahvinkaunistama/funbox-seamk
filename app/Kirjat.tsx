import { StyleSheet, Text, View } from "react-native";
import AddButton from "../components/AddButton";

export default function Kirjat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tämä on sivu kirjoille.</Text>
      <Text style={styles.title}>Tarkastele alta lukemiasi kirjoja:</Text>

      <AddButton onPress={() => console.log("Clicked!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#67788C",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#F9C3C3",
  },
});