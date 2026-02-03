import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import ButtonRow from "../components/ButtonRow";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";
import YearField from "@/components/YearField";
import RatingField from "@/components/RatingField";
import PickerField from "@/components/PickerField";
import DatePickerField from "@/components/DatePickerField";
import PopUpModal from "@/components/PopUpModal";

export default function AddKirjat() {
  const [kirjaNimi, setKirjaNimi] = useState("");
  const [kirjailija, setKirjailija] = useState("");
  const [vuosi, setVuosi] = useState("");
  const [arvosana, setArvosana] = useState("");
  const [onkoLuettu, setOnkoLuettu] = useState("Ei");
  const [viimeksiLuettu, setViimeksiLuettu] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const db = SQLite.useSQLiteContext();

  const modalAsync = async () => {
    setModalVisible(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setModalVisible(false);
  };

  const handleKirjaAdd = async () => {
    try {
      await db.runAsync(
        "INSERT INTO kirjat (nimi, kirjailija, vuosi, arvosana, onkoLuettu, viimeksiLuettu) VALUES (?,?,?,?,?,?)",
        [kirjaNimi, kirjailija, vuosi, arvosana, onkoLuettu, viimeksiLuettu],
      );
      modalAsync();
      console.log("Kirja lisätty!");
    } catch (error) {
      console.log("Virhe: ", error);
    }
    setKirjaNimi("");
    setKirjailija("");
    setVuosi("");
    setArvosana("");
    setOnkoLuettu("Ei");
    setViimeksiLuettu("");
  };

  return (
    <View style={DefaultStyle.container}>
      <PopUpModal
        visible={modalVisible}
        teksti="Kirja lisätty!"
        onClose={() => setModalVisible(false)}
      />

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

      <YearField onChange={setVuosi} value={vuosi} />

      <RatingField value={arvosana} onChange={setArvosana} />

      <PickerField
        value={onkoLuettu}
        onChange={setOnkoLuettu}
        text="Onko luettu?"
      />

      <DatePickerField
        value={viimeksiLuettu}
        onChange={setViimeksiLuettu}
        placeHolderText="Viimeksi luettu"
        clearText={() => setViimeksiLuettu("")}
      />

      <ButtonRow
        onAdd={handleKirjaAdd}
        onClear={() => {
          console.log("Kentät tyhjennetty, kirja");
          setKirjaNimi("");
          setKirjailija("");
          setVuosi("");
          setArvosana("");
          setOnkoLuettu("Ei");
          setViimeksiLuettu("");
        }}
      />

      <BackButton onPress={() => router.push("/Kirjat")} />
    </View>
  );
}
