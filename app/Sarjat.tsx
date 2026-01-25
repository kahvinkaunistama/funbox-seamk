import HomeButton from "@/components/HomeButton";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import BoxStyles from "../styles/BoxStyles";
import PieceCard from "@/components/PieceCard";

export default function Sarjat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Sarjat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta katsomiasi sarjoja</Text>
      <Content />
      <AddButton onPress={() => router.push("/AddSarjat")} />
      <HomeButton />
    </View>
  );
}

interface SarjaInt {
  id: number;
  nimi: string;
  vuosi: number;
  arvosana: number;
  onkoKatsottu: string;
  viimeksiKatsottu: string;
}

export function Content() {
  const db = SQLite.useSQLiteContext();
  const [sarjat, setSarjat] = useState<SarjaInt[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<SarjaInt>("SELECT * FROM sarjat");
      setSarjat(result);
    }
    setup();
  });

  const poista = async (id: number) => {
    try {
      await db.runAsync("DELETE FROM sarjat WHERE id = (?)", id);
      console.log("Poistettiin");
    } catch (e) {
      console.log("Virhe: ", e);
    }
  };

  const teos = async (id: number) => {
    try {
      console.log("Yksittäiseen teokseen");
      router.push({
        pathname: "/SingleShow",
        params: { id: id.toString() },
      });
    } catch (e) {
      console.log("Virhe: ", e);
    }
  };

  return (
    <View>
      <View style={BoxStyles.listContainer}></View>
      {sarjat.map((sarja, index) => (
        <PieceCard
          key={index}
          onPress={() => poista(sarja.id)}
          text1={sarja.nimi}
          text2={sarja.vuosi.toString()}
          singlePiecePress={() => teos(sarja.id)}
        />
      ))}
    </View>
  );
}
