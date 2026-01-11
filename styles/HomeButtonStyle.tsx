import { StyleSheet } from "react-native";

const HomeButtonStyle = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 30,
    left: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F9C3C3",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    zIndex: 10,
  },
  fabText: {
    fontSize: 32,
    color: "#67788C",
    marginTop: -3,
  },
});

export default HomeButtonStyle;