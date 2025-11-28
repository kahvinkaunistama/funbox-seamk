import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import BottomBar from "../components/BottomBar";

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* Näyttöjen sisältö */}
      <View style={styles.content}>
        <Stack />
      </View>

      {/* Alapalkki */}
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 0, // ettei sisältö mene palkin alle
  },
});
