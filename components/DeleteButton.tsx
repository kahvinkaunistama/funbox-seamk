import { Entypo } from "@expo/vector-icons";
import { Pressable } from "react-native";

type DeleteButtonProps = {
  styles1: any;
  styles2: any;
  onPress: () => void;
};

export default function DeleteButton({
  styles1,
  styles2,
  onPress,
}: DeleteButtonProps) {
  return (
    <Pressable style={styles1} onPress={onPress}>
      <Entypo style={styles2} name="trash" size={28} />
    </Pressable>
  );
}
