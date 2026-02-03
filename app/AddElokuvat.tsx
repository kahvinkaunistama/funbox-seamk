import DatePickerField from "@/components/DatePickerField";
import PickerField from "@/components/PickerField";
import RatingField from "@/components/RatingField";
import YearField from "@/components/YearField";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import ButtonRow from "../components/ButtonRow";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";
import PopUpModal from "@/components/PopUpModal";

export default function AddElokuvat() {
  const [elokuvaNimi, setElokuvaNimi] = useState("");
  const [ohjaaja, setOhjaaja] = useState("");
  const [vuosi, setVuosi] = useState("");
  const [arvosana, setArvosana] = useState("");
  const [onkoKatsottu, setOnkoKatsottu] = useState("Ei");
  const [viimeksiKatsottu, setViimeksiKatsottu] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const db = SQLite.useSQLiteContext();

  const modalAsync = async () => {
    setModalVisible(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setModalVisible(false);
  };

  const handleMovieAdd = async () => {
    try {
      await db.runAsync(
        "INSERT INTO elokuvat (nimi, ohjaaja, vuosi, arvosana, onkoKatsottu, viimeksiKatsottu) VALUES (?,?,?,?,?,?)",
        [elokuvaNimi, ohjaaja, vuosi, arvosana, onkoKatsottu, viimeksiKatsottu],
      );
      console.log("Elokuva lisätty!");
      modalAsync();
    } catch (error) {
      console.log("Virhe: ", error);
    }
    setElokuvaNimi("");
    setOhjaaja("");
    setVuosi("");
    setArvosana("");
    setOnkoKatsottu("Ei");
    setViimeksiKatsottu("");
  };

  return (
    <View style={DefaultStyle.container}>
      <PopUpModal
        visible={modalVisible}
        teksti="Elokuva lisätty!"
        onClose={() => setModalVisible(false)}
      />
      <ScrollView style={DefaultStyle.scrollCContainer}>
        <Text style={DefaultStyle.header}>Lisää elokuva</Text>

        <TextField
          value={elokuvaNimi}
          onChangeText={setElokuvaNimi}
          placeholder="Elokuvan nimi"
        />

        <TextField
          value={ohjaaja}
          onChangeText={setOhjaaja}
          placeholder="Ohjaaja"
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
          placeHolderText="Viimeksi katsottu (YYYY-MM-DD)"
          onChange={setViimeksiKatsottu}
          clearText={() => setViimeksiKatsottu("")}
        />

        <ButtonRow
          onAdd={handleMovieAdd}
          onClear={() => {
            console.log("Kentät tyhjennetty, elokuva");
            setElokuvaNimi("");
            setOhjaaja("");
            setVuosi("");
            setArvosana("");
            setOnkoKatsottu("Ei");
            setViimeksiKatsottu("");
          }}
        />
      </ScrollView>

      <BackButton onPress={() => router.push("/Elokuvat")} />
    </View>
  );
}
