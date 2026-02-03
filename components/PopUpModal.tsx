import React from "react";
import { View, Modal, StyleSheet, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

type ModalProps = {
  visible: any;
  onClose: any;
  teksti: string;
};

export default function PopUpModal({ visible, onClose, teksti }: ModalProps) {
  const offset = useSharedValue(-300);

  React.useEffect(() => {
    if (visible) {
      offset.value = withSpring(0, { damping: 70 });
    } else {
      offset.value = withSpring(-200, { damping: 70 });
    }
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View style={[styles.modalContent, animatedStyle]}>
          <Text style={styles.modalText}>{teksti}</Text>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  modalContent: {
    top: "-25%",
    alignSelf: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalText: {
    textAlign: "center",
  },
});
