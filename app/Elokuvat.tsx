import HomeButton from "@/components/HomeButton";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";

export default function Elokuvat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Elokuvat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta katsomiasi elokuvia</Text>
      <Content />
      <AddButton onPress={() => router.push("/AddElokuvat")} />
      <HomeButton />
    </View>
  );
}

interface ElokuvatInt {
  nimi: string;
  ohjaaja: string;
  vuosi: number;
  arvosana: number;
  onkoKatsottu: string;
  viimeksiKatsottu: string;
}

export function Content() {
  const db = SQLite.useSQLiteContext();
  const [elokuvat, setElokuvat] = useState<ElokuvatInt[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<ElokuvatInt>(
        "SELECT * FROM elokuvat",
      );
      setElokuvat(result);
    }
    setup();
  });

  return (
    <View>
      {elokuvat.map((elokuva, index) => (
        <View key={index}>
          <Text>{`${elokuva.nimi} - ${elokuva.ohjaaja} - ${elokuva.vuosi} - ${elokuva.arvosana} - ${elokuva.onkoKatsottu} - ${elokuva.viimeksiKatsottu}`}</Text>
        </View>
      ))}
    </View>
  );
}
