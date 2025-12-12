import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";

export default function AddElokuvat() {
    const [elokuva, setElokuva] = useState("");
    const [ohjaaja, setOhjaaja] = useState("")
    const [vuosi3, setVuosi3] = useState("")
    const [arvosana3, setArvosana3] = useState("")
    const [onkokatsottu2, setOnkokatsottu2] = useState("")
    const [viimeksikatsottu2, setViimeksikatsottu2] = useState("")
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää elokuva</Text>

        <TextField
          value={elokuva}
          onChangeText={setElokuva}
          placeholder="Elokuvan nimi"
          />
      
        <TextField
          value={ohjaaja}
          onChangeText={setOhjaaja}
          placeholder="Ohjaaja"
          />
      
        <TextField
          value={vuosi3}
          onChangeText={setVuosi3}
          placeholder="Vuosi"
          />
      
        <TextField
          value={arvosana3}
          onChangeText={setArvosana3}
          placeholder="Arvosana (1-5)"
          />
      
        <TextField
          value={onkokatsottu2}
          onChangeText={setOnkokatsottu2}
          placeholder="Katsottu/ei katsottu"
          />
      
        <TextField
          value={viimeksikatsottu2}
          onChangeText={setViimeksikatsottu2}
          placeholder="Viimeksi katsottu"
          />

      <BackButton onPress={() => router.push("/Elokuvat")} />
    </View>
  );
}