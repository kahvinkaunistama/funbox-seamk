import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import BackButton from "../components/BackButton";
import TextField from "../components/TextField";
import DefaultStyle from "../styles/DefaultStyle";



export default function AddKirjat() {
  const [title, setTitle] = useState("");

  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Lisää kirja</Text>

        <TextField
        value={title}
        onChangeText={setTitle}
        placeholder="Kirjan nimi"
        />

        <TextField
        value={title}
        onChangeText={setTitle}
        placeholder="Kirjailija"
        />

        <TextField
        value={title}
        onChangeText={setTitle}
        placeholder="Vuosi"
        />

        <TextField
        value={title}
        onChangeText={setTitle}
        placeholder="Arvosana (1-5)"
        />

        <TextField
        value={title}
        onChangeText={setTitle}
        placeholder="Luettu/ei luettu"
        />

        <TextField
        value={title}
        onChangeText={setTitle}
        placeholder="Viimeksi luettu"
        />

      <BackButton onPress={() => router.push("/Kirjat")} />
    </View>
  );
}