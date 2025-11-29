import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67788C",
    paddingTop: 60,           // tilaa status barin yläpuolelle
    paddingHorizontal: 16,
    alignItems: "center",
  },
    header: {
    fontSize: 45,             // iso otsikko
    fontWeight: "700",
    color: "#F9C3C3",
    marginBottom: 20,         // etäisyyttä seuraavaan tekstiin
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
    title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#F9C3C3",
  },
});

export default globalStyles;