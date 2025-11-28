import { StyleSheet, Text, View } from "react-native";
import AddButton from "../components/AddButton";

export default function Sarjat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tämä on sivu sarjoille.</Text>
      <Text style={styles.title}>Tarkastele alta katsomiasi sarjoja:</Text>

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