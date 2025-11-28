import { StyleSheet, Text, View } from "react-native";

export default function Elokuvat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tämä on sivu elokuville.</Text>
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