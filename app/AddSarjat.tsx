import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddSarjat() {
  const [sarja, setSarja] = useState("");
  const [vuosi, setVuosi] = useState("")
  const [onkokatsottu, setOnkokatsottu] = useState("")
  const [arvosana, setArvosana] = useState("")
  const [viimeksikatsottu, setViimeksikatsottu] = useState("")

  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää sarja</Text>

              <TextField
              value={sarja}
              onChangeText={setSarja}
              placeholder="Sarjan nimi"
              />
      
              <TextField
              value={vuosi}
              onChangeText={setVuosi}
              placeholder="Vuosi"
              />
      
              <TextField
              value={arvosana}
              onChangeText={setArvosana}
              placeholder="Arvosana"
              />
      
              <TextField
              value={onkokatsottu}
              onChangeText={setOnkokatsottu}
              placeholder="Katsottu/ei katsottu"
              />

              <TextField
              value={arvosana}
              onChangeText={setArvosana}
              placeholder="Arvosana (1-5)"
              />

              <TextField
              value={viimeksikatsottu}
              onChangeText={setViimeksikatsottu}
              placeholder="Viimeksi katsottu"
              />

      <BackButton onPress={() => router.push("/Sarjat")} />
    </View>
  );
}