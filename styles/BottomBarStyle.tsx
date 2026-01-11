import { StyleSheet } from "react-native";

const BottomBarStyle = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DDDDE0',
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.15)",
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,           // korkeus
    borderRadius: 12,
    marginHorizontal: 4,  // pieni etäisyys napin väliin
  },

    divider: {
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    height: '50%', // voit säätää, miten korkea divider on
  },
  
  text: {
    fontSize: 16,
    color: '#67788C',
    fontWeight: '600',
  },
});

export default BottomBarStyle;