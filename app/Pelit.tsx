import HomeButton from "@/components/HomeButton";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import BoxStyles from "../styles/BoxStyles";
import PieceCard from "@/components/PieceCard";

export default function Pelit() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Pelit</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta pelaamiasi pelejä</Text>
      <Content />
      <AddButton onPress={() => router.push("/AddPelit")} />
      <HomeButton />
    </View>
  );
}

interface PelitInt {
  id: number;
  nimi: string;
  valmistaja: string;
  vuosi: number;
  arvosana: number;
  onkoPelattu: string;
  viimeksiPelattu: string;
}

export function Content() {
  const db = SQLite.useSQLiteContext();
  const [pelit, setPelit] = useState<PelitInt[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<PelitInt>("SELECT * FROM pelit");
      setPelit(result);
    }
    setup();
  });

  const teos = async (id: number) => {
    try {
      console.log("Yksittäiseen teokseen");
      router.push({
        pathname: "/SingleGame",
        params: { id: id.toString() },
      });
    } catch (e) {
      console.log("Virhe: ", e);
    }
  };

  const poista = async (id: number) => {
    try {
      await db.runAsync("DELETE FROM pelit WHERE id = (?)", id);
      console.log("Poistettiin");
    } catch (e) {
      console.log("Virhe: ", e);
    }
  };

  return (
    <View>
      <ScrollView style={BoxStyles.listContainer}>
        {pelit.map((peli, index) => (
          <PieceCard
            key={index}
            onPress={() => poista(peli.id)}
            text1={peli.nimi}
            singlePiecePress={() => teos(peli.id)}
            text2={peli.valmistaja}
          />
        ))}
      </ScrollView>
    </View>
  );
}
