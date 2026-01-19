import HomeButton from "@/components/HomeButton";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";

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
      {pelit.map((peli, index) => (
        <View key={index}>
          <Text>{`${peli.nimi} - ${peli.valmistaja}`}</Text>
        </View>
      ))}
    </View>
  );
}
