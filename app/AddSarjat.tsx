import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import ButtonRow from "../components/ButtonRow";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddSarjat() {
  const [sarjaNimi, setSarjaNimi] = useState("");
  const [vuosi, setVuosi] = useState("");
  const [onkoKatsottu, setOnkoKatsottu] = useState("");
  const [arvosana, setArvosana] = useState("");
  const [viimeksiKatsottu, setViimeksiKatsottu] = useState("");

  const db = SQLite.useSQLiteContext();

  const handleSarjaAdd = async () => {
    try {
      await db.runAsync("INSERT INTO sarjat (nimi, vuosi) VALUES (?,?)", [
        sarjaNimi,
        vuosi,
      ]);
      console.log("Sarja lisätty!");
    } catch (error) {
      console.log("Virhe: ", error);
    }
  };

  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää sarja</Text>

      <TextField
        value={sarjaNimi}
        onChangeText={setSarjaNimi}
        placeholder="Sarjan nimi"
      />

      <TextField value={vuosi} onChangeText={setVuosi} placeholder="Vuosi" />

      <TextField
        value={arvosana}
        onChangeText={setArvosana}
        placeholder="Arvosana (1-10)"
      />

      <TextField
        value={onkoKatsottu}
        onChangeText={setOnkoKatsottu}
        placeholder="Katsottu/ei katsottu"
      />

      <TextField
        value={viimeksiKatsottu}
        onChangeText={setViimeksiKatsottu}
        placeholder="Viimeksi katsottu"
      />

      <ButtonRow
        onAdd={handleSarjaAdd}
        onClear={() => {
          console.log("Kentät tyhjennetty, sarja");
          setSarjaNimi("");
          setVuosi("");
          setArvosana("");
          setOnkoKatsottu("");
          setViimeksiKatsottu("");
        }}
      />

      <BackButton onPress={() => router.push("/Sarjat")} />
    </View>
  );
}
