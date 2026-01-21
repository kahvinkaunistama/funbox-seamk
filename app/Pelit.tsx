import HomeButton from "@/components/HomeButton";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import BoxStyles from "../styles/BoxStyles";

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
  nimi: string;
  valmistaja: string;
  vuosi: string;
  arvosana: string;
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

  return (
    <View>
      <View style={BoxStyles.listContainer}></View>
      {pelit.map((peli, index) => (
        <View key={index} style={BoxStyles.box}>
          <Text style={BoxStyles.title}>{peli.nimi}</Text>
          <Text style={BoxStyles.author}>{peli.valmistaja}</Text>
        </View>
      ))}
    </View>
  );
}
