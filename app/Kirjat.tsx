import HomeButton from "@/components/HomeButton";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import BoxStyles from "../styles/BoxStyles";
import PieceCard from "@/components/PieceCard";

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
  id: number;
  nimi: string;
  kirjailija: string;
  vuosi: number;
  arvosana: number;
  onkoLuettu: string;
  viimeksiLuettu: string;
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

  const poista = async (id: number) => {
    try {
      await db.runAsync("DELETE FROM kirjat WHERE id = (?)", id);
      console.log("Poistettiin");
    } catch (e) {
      console.log("Virhe: ", e);
    }
  };

  const teos = async (id: number) => {
    try {
      console.log("Yksittäiseen teokseen");
      router.push({
        pathname: "/SingleBook",
        params: { id: id.toString() },
      });
    } catch (e) {
      console.log("Virhe: ", e);
    }
  };

  return (
    <View>
      <View style={BoxStyles.listContainer}></View>
      {kirjat.map((kirja, index) => (
        <PieceCard
          key={index}
          onPress={() => poista(kirja.id)}
          text1={kirja.nimi}
          text2={kirja.kirjailija}
          singlePiecePress={() => teos(kirja.id)}
        />
      ))}
    </View>
  );
}
