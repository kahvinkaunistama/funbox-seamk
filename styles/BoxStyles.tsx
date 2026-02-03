import { StyleSheet } from "react-native";

const BoxStyles = StyleSheet.create({
  listContainer: {
    width: "100%",
    alignSelf: "stretch",
    marginTop: 16,
    marginBottom: 200,
  },
  box: {
    width: "100%",
    backgroundColor: "#f4e8e8",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    width: "80%",
    fontWeight: "700",
    color: "#67788C",
  },

  author: {
    fontSize: 16,
    color: "#67788C",
    marginTop: 4,
  },

  delete: {
    position: "absolute",
    top: "50%", // Adjust as needed
    right: 15, // Adjust as needed
  },

  deleteColor: {
    color: "#d16c6e",
  },
});

export default BoxStyles;
