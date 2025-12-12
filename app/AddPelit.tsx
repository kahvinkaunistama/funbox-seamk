import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddPelit() {
    const [peli, setPeli] = useState("");
    const [valmistaja, setValmistaja] = useState("")
    const [vuosi4, setVuosi4] = useState("")
    const [arvosana4, setArvosana4] = useState("")
    const [onkopelattu, setOnkoPelattu] = useState("")
    const [viimeksipelattu, setViimeksipelattu] = useState("")

  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää peli</Text>
      <TextField
        value={peli}
        onChangeText={setPeli}
        placeholder="Pelin nimi"
        />
      
      <TextField
        value={valmistaja}
        onChangeText={setValmistaja}
        placeholder="Valmistaja"
        />
      
      <TextField
        value={vuosi4}
        onChangeText={setVuosi4}
        placeholder="Vuosi"
        />
      
      <TextField
        value={arvosana4}
        onChangeText={setArvosana4}
        placeholder="Arvosana (1-5)"
        />
      
      <TextField
        value={onkopelattu}
        onChangeText={setOnkoPelattu}
        placeholder="Pelattu/Ei pelattu"
        />
      
      <TextField
        value={viimeksipelattu}
        onChangeText={setViimeksipelattu}
        placeholder="Viimeksi pelattu"
        />
      
      <BackButton onPress={() => router.push("/Pelit")} />
    </View>
  );
}