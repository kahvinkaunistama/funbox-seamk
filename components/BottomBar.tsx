import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BottomBar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/Kirjat")}>
        <Text style={styles.text}>Kirjat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/Sarjat")}>
        <Text style={styles.text}>Sarjat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/Elokuvat")}>
        <Text style={styles.text}>Elokuvat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/Pelit")}>
        <Text style={styles.text}>Pelit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DDDDE0',
  // Android workaround:
  borderTopWidth: 1,
  borderTopColor: "rgba(0,0,0,0.15)",
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    // divider
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,0,0,0.15)',
  },
  
  text: {
    fontSize: 16,
    color: '#67788C',
    fontWeight: '600',
  },
});



