import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import ButtonRow from "../components/ButtonRow";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";
import PickerField from "@/components/PickerField";
import YearField from "@/components/YearField";
import RatingField from "@/components/RatingField";
import DatePickerField from "@/components/DatePickerField";

export default function AddSarjat() {
  const [sarjaNimi, setSarjaNimi] = useState("");
  const [vuosi, setVuosi] = useState("");
  const [onkoKatsottu, setOnkoKatsottu] = useState("Ei");
  const [arvosana, setArvosana] = useState("");
  const [viimeksiKatsottu, setViimeksiKatsottu] = useState("");

  const db = SQLite.useSQLiteContext();

  const handleSarjaAdd = async () => {
    try {
      await db.runAsync(
        "INSERT INTO sarjat (nimi, vuosi, onkoKatsottu, arvosana, viimeksiKatsottu) VALUES (?,?,?,?,?)",
        [sarjaNimi, vuosi, onkoKatsottu, arvosana, viimeksiKatsottu],
      );
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

      <YearField value={vuosi} onChange={setVuosi} />

      <RatingField value={arvosana} onChange={setArvosana} />

      <PickerField
        value={onkoKatsottu}
        onChange={setOnkoKatsottu}
        text="Onko katsottu?"
      />

      <DatePickerField
        value={viimeksiKatsottu}
        onChange={setViimeksiKatsottu}
        placeHolderText="Viimeksi katsottu"
        clearText={() => setViimeksiKatsottu("")}
      />

      <ButtonRow
        onAdd={handleSarjaAdd}
        onClear={() => {
          console.log("Kentät tyhjennetty, sarja");
          setSarjaNimi("");
          setVuosi("");
          setArvosana("");
          setOnkoKatsottu("Ei");
          setViimeksiKatsottu("");
        }}
      />

      <BackButton onPress={() => router.push("/Sarjat")} />
    </View>
  );
}
