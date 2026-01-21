import HomeButton from "@/components/HomeButton";
import { router } from "expo-router";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import BoxStyles from "../styles/BoxStyles";

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
  nimi: string;
  vuosi: string;
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

  return (
    <View>
      <View style={BoxStyles.listContainer}></View>
      {sarjat.map((sarja, index) => (
        <View key={index} style={BoxStyles.box}>
          <Text style={BoxStyles.title}>{sarja.nimi}</Text>
          <Text style={BoxStyles.author}>{sarja.vuosi}</Text>
        </View>
      ))}
    </View>
  );
}
