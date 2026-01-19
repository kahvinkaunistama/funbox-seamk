import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import ButtonRow from "../components/ButtonRow";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddKirjat() {
  const [kirjaNimi, setKirjaNimi] = useState("");
  const [kirjailija, setKirjailija] = useState("");
  const [vuosi, setVuosi] = useState("");
  const [arvosana, setArvosana] = useState("");
  const [onkoLuettu, setOnkoLuettu] = useState("");
  const [viimeksiLuettu, setViimeksiLuettu] = useState("");

  const db = SQLite.useSQLiteContext();

  const handleKirjaAdd = async () => {
    try {
      await db.runAsync("INSERT INTO kirjat (nimi, kirjailija) VALUES (?,?)", [
        kirjaNimi,
        kirjailija,
      ]);
      console.log("Kirja lisätty!");
    } catch (error) {
      console.log("Virhe: ", error);
    }
  };

  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää kirja</Text>

      <TextField
        value={kirjaNimi}
        onChangeText={setKirjaNimi}
        placeholder="Kirjan nimi"
      />

      <TextField
        value={kirjailija}
        onChangeText={setKirjailija}
        placeholder="Kirjailija"
      />

      <TextField value={vuosi} onChangeText={setVuosi} placeholder="Vuosi" />

      <TextField
        value={arvosana}
        onChangeText={setArvosana}
        placeholder="Arvosana (1-10)"
      />

      <TextField
        value={onkoLuettu}
        onChangeText={setOnkoLuettu}
        placeholder="Luettu/ei luettu"
      />

      <TextField
        value={viimeksiLuettu}
        onChangeText={setViimeksiLuettu}
        placeholder="Viimeksi luettu"
      />

      <ButtonRow
        onAdd={handleKirjaAdd}
        onClear={() => {
          console.log("Kentät tyhjennetty, kirja");
          setKirjaNimi("");
          setKirjailija("");
          setVuosi("");
          setArvosana("");
          setOnkoLuettu("");
          setViimeksiLuettu("");
        }}
      />

      <BackButton onPress={() => router.push("/Kirjat")} />
    </View>
  );
}
