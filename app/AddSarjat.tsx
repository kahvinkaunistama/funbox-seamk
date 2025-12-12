import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddSarjat() {
  const [sarja, setSarja] = useState("");
  const [vuosi2, setVuosi2] = useState("")
  const [onkokatsottu1, setOnkokatsottu1] = useState("")
  const [arvosana2, setArvosana2] = useState("")
  const [viimeksikatsottu1, setViimeksikatsottu1] = useState("")

  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää sarja</Text>

        <TextField
          value={sarja}
          onChangeText={setSarja}
          placeholder="Sarjan nimi"
          />
      
        <TextField
          value={vuosi2}
          onChangeText={setVuosi2}
          placeholder="Vuosi"
          />

        <TextField
          value={arvosana2}
          onChangeText={setArvosana2}
          placeholder="Arvosana (1-5)"
          />

        <TextField
          value={onkokatsottu1}
          onChangeText={setOnkokatsottu1}
          placeholder="Katsottu/ei katsottu"
          />

        <TextField
          value={viimeksikatsottu1}
          onChangeText={setViimeksikatsottu1}
          placeholder="Viimeksi katsottu"
          />

      <BackButton onPress={() => router.push("/Sarjat")} />
    </View>
  );
}