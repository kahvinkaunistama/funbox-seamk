import HomeButton from "@/components/HomeButton";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import BoxStyles from "../styles/BoxStyles";

export default function Kirjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Kirjat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta lukemiasi kirjoja</Text>
      <Content />
      <AddButton onPress={() => router.push("/AddKirjat")} />
      <HomeButton />
    </View>
  );
}

interface KirjatInt {
  nimi: string;
  kirjailija: string;
}

export function Content() {
  const db = SQLite.useSQLiteContext();
  const [kirjat, setKirjat] = useState<KirjatInt[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<KirjatInt>("SELECT * FROM kirjat");
      setKirjat(result);
    }
    setup();
  });

  return (
    <View>
      <View style={BoxStyles.listContainer}></View>
      {kirjat.map((kirja, index) => (
        <View key={index} style={BoxStyles.box}>
          <Text style={BoxStyles.title}>{kirja.nimi}</Text>
          <Text style={BoxStyles.author}>{kirja.kirjailija}</Text>
        </View>
      ))}
    </View>
  );
}
