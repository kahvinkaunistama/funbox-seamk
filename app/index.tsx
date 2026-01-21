import { StyleSheet, Text, View, Image } from "react-native";
import frontpagePictureStyle from "../styles/frontpagePictureStyle";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.boxStyle}>
      <Text style={styles.header}>Funbox</Text>
      <Text style={styles.text}>Your interests in one place.</Text>

      <Image
      source={require('../assets/images/frontpage.jpg')}
      style={frontpagePictureStyle.place}
      />
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67788C",
    paddingTop: 30, // tilaa status barin yläpuolelle
    paddingHorizontal: 16,
    textAlign: "center",
    alignItems: 'center',
  },
  header: {
    fontSize: 65, // iso otsikko
    fontWeight: "700",
    color: "#F9C3C3",
    marginBottom: 20, // etäisyyttä seuraavaan tekstiin
    textAlign: "center",
    fontFamily: "cursive",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "#F9C3C3",
    textAlign: "center",
    fontFamily: "serif",
  },
  boxStyle: {
    alignItems: "center",
    width: 350,
    height: 700,
    borderColor: "#f5f1f164",
    borderRadius: 20,
    borderWidth: 5,
  }

});
