import { View, Text } from "react-native";
import BoxStyles from "@/styles/BoxStyles";
import DeleteButton from "./DeleteButton";

type PieceCardProps = {
  key: number;
  text1: string;
  text2: string;
  onPress: () => void;
};

export default function PieceCard({
  key,
  text1,
  text2,
  onPress,
}: PieceCardProps) {
  return (
    <View key={key} style={BoxStyles.box}>
      <Text style={BoxStyles.title}>{text1}</Text>
      <Text style={BoxStyles.author}>{text2}</Text>
      <DeleteButton
        styles1={BoxStyles.delete}
        styles2={BoxStyles.deleteColor}
        onPress={onPress}
      />
    </View>
  );
}
