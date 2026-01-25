import { StyleSheet } from "react-native";

const SinglePieceStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67788C", // Light background for readability
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#dddde0",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "800",
    color: "#d5a6a6",
    marginBottom: 12,
    textAlign: "center",
    fontFamily: "serif",
  },
  author: {
    fontSize: 20,
    fontWeight: "600",
    color: "#555",
    textAlign: "center",
    marginBottom: 16,
    fontStyle: "italic",
  },
  detail: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
    textAlign: "left",
  },
});

export default SinglePieceStyle;
