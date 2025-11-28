import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Kirjat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Sarjat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Elokuvat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Pelit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#67788C',
    borderTopWidth: 1,
    borderColor: '#B1D9D9',
  },
  button: {
    padding: 10,
  },
  text: {
    fontSize: 14,
    color: '#F9C3C3',
    fontWeight: '600',
  },
});
