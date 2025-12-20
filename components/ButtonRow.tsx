import React from "react";
import { StyleSheet, View } from "react-native";
import AddPiece from "../components/AddPiece";
import EmptyFields from "../components/EmptyFields";

type Props = {
  onAdd: () => void;
  onClear: () => void;
};

export default function ButtonRow({ onAdd, onClear }: Props) {
  return (
    <View style={styles.row}>
      <AddPiece onPress={onAdd} style={styles.button}/>
      <EmptyFields onPress={onClear} style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",          // napit vierekkäin
    width: "100%",
    marginTop: 20,
  },
  button: {
    flex: 1,            // tasalevyiset napit
    marginHorizontal: 6, // nappien väli
  },
});
