import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import AddPiece from "../components/AddPiece";
import BackButton from "../components/BackButton";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddKirjat() {
  const [kirja, setKirja] = useState("");
  const [kirjailija, setKirjailija] = useState("")
  const [vuosi1, setVuosi1] = useState("")
  const [arvosana1, setArvosana1] = useState("")
  const [onkoluettu, setOnkoluettu] = useState("")
  const [viimeksiluettu, setViimeksiluettu] = useState("")

  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää kirja</Text>

        <TextField
        value={kirja}
        onChangeText={setKirja}
        placeholder="Kirjan nimi"
        />

        <TextField
        value={kirjailija}
        onChangeText={setKirjailija}
        placeholder="Kirjailija"
        />

        <TextField
        value={vuosi1}
        onChangeText={setVuosi1}
        placeholder="Vuosi"
        />

        <TextField
        value={arvosana1}
        onChangeText={setArvosana1}
        placeholder="Arvosana (1-5)"
        />

        <TextField
        value={onkoluettu}
        onChangeText={setOnkoluettu}
        placeholder="Luettu/ei luettu"
        />

        <TextField
        value={viimeksiluettu}
        onChangeText={setViimeksiluettu}
        placeholder="Viimeksi luettu"
        />

        <AddPiece onPress={() => console.log("Lisätään:", kirja, kirjailija)} />


      <BackButton onPress={() => router.push("/Kirjat")} />
    </View>
  );
}