import { View, Text, Pressable } from "react-native";
import BoxStyles from "@/styles/BoxStyles";
import DeleteButton from "./DeleteButton";

type PieceCardProps = {
  key: any;
  text1: string;
  text2: string;
  singlePiecePress: () => void;
  onPress: () => void;
};

export default function PieceCard({
  text1,
  text2,
  onPress,
  singlePiecePress,
}: PieceCardProps) {
  return (
    <Pressable onPress={singlePiecePress}>
      <View style={BoxStyles.box}>
        <Text style={BoxStyles.title}>{text1}</Text>
        <Text style={BoxStyles.author}>{text2}</Text>
        <DeleteButton
          styles1={BoxStyles.delete}
          styles2={BoxStyles.deleteColor}
          onPress={onPress}
        />
      </View>
    </Pressable>
  );
}
