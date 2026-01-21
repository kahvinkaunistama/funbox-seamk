import { StyleSheet } from "react-native";

const BoxStyles = StyleSheet.create({
  listContainer: {
    width: "100%",
    alignSelf: "stretch",
    marginTop: 16,
  },

  box: {
    width: "100%",
    backgroundColor: "#f8dede",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#67788C",
  },

  author: {
    fontSize: 16,
    color: "#67788C",
    marginTop: 4,
  },
});

export default BoxStyles;
