import DatePickerField from "@/components/DatePickerField";
import PickerField from "@/components/PickerField";
import RatingField from "@/components/RatingField";
import YearField from "@/components/YearField";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import ButtonRow from "../components/ButtonRow";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddPelit() {
  const [peliNimi, setPeliNimi] = useState("");
  const [valmistaja, setValmistaja] = useState("");
  const [vuosi, setVuosi] = useState("");
  const [arvosana, setArvosana] = useState("");
  const [onkoPelattu, setOnkoPelattu] = useState("");
  const [viimeksiPelattu, setViimeksiPelattu] = useState("");

  const db = SQLite.useSQLiteContext();

  const handlePeliAdd = async () => {
    try {
      await db.runAsync("INSERT INTO pelit (nimi, valmistaja) VALUES (?,?)", [
        peliNimi,
        valmistaja,
      ]);
      console.log("Peli lisätty!");
    } catch (error) {
      console.log("Virhe: ", error);
    }
  };

  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää peli</Text>
      <TextField
        value={peliNimi}
        onChangeText={setPeliNimi}
        placeholder="Pelin nimi"
      />

      <TextField
        value={valmistaja}
        onChangeText={setValmistaja}
        placeholder="Valmistaja"
      />

      <YearField onChange={setVuosi} value={vuosi} />

      <RatingField value={arvosana} onChange={setArvosana} />

      <PickerField
        text="Onko pelattu?"
        value={onkoPelattu}
        onChange={setOnkoPelattu}
      />
      <DatePickerField
        value={viimeksiPelattu}
        onChange={setViimeksiPelattu}
        placeHolderText="Viimeksi pelattu"
        clearText={() => setViimeksiPelattu("")}
      />

      <ButtonRow
        onAdd={handlePeliAdd}
        onClear={() => {
          console.log("Kentät tyhjennetty, peli");
          setPeliNimi("");
          setValmistaja("");
          setVuosi("");
          setArvosana("");
          setOnkoPelattu("");
          setViimeksiPelattu("");
        }}
      />

      <BackButton onPress={() => router.push("/Pelit")} />
    </View>
  );
}
