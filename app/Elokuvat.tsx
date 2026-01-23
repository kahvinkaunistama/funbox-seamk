import HomeButton from "@/components/HomeButton";
import PieceCard from "@/components/PieceCard";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import BoxStyles from "../styles/BoxStyles";

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
  id: number;
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

  const poista = async (id: number) => {
    try {
      await db.runAsync("DELETE FROM elokuvat WHERE id = (?)", id);
      console.log("Poistettiin");
    } catch (e) {
      console.log("Virhe: ", e);
    }
  };

  return (
    <View>
      <ScrollView style={BoxStyles.listContainer}>
        {elokuvat.map((elokuva, index) => (
          <PieceCard
            key={index}
            text1={elokuva.nimi}
            text2={elokuva.ohjaaja}
            onPress={() => poista(elokuva.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
