import { StyleSheet } from "react-native";

const BottomBarStyle = StyleSheet.create({
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

export default BottomBarStyle;