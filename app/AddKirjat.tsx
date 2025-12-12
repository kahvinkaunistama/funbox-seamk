import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";



export default function AddKirjat() {
  const [kirja, setKirja] = useState("");
  const [kirjailija, setKirjailija] = useState("")
  const [vuosi, setVuosi] = useState("")
  const [arvosana, setArvosana] = useState("")
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
        value={vuosi}
        onChangeText={setVuosi}
        placeholder="Vuosi"
        />

        <TextField
        value={arvosana}
        onChangeText={setArvosana}
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

      <BackButton onPress={() => router.push("/Kirjat")} />
    </View>
  );
}