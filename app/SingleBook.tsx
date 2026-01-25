import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import SinglePieceStyle from "@/styles/SinglePieceStyle";

interface KirjaInt {
  nimi: string;
  kirjailija: string;
  vuosi: number;
  arvosana: number;
  onkoLuettu: string;
  viimeksiLuettu: string;
}

export default function SingleBook() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [kirja, setKirja] = useState<KirjaInt[]>([]);
  const db = SQLite.useSQLiteContext();

  useEffect(() => {
    async function haeKirja() {
      const result = await db.getAllAsync<KirjaInt>(
        "SELECT * FROM kirjat WHERE id = (?)",
        parseInt(id),
      );
      setKirja(result);
    }
    if (id) haeKirja();
  });

  return (
    <View style={SinglePieceStyle.container}>
      {kirja.map((tiedot, index) => (
        <View key={index} style={SinglePieceStyle.card}>
          <Text style={SinglePieceStyle.header}>{tiedot.nimi}</Text>
          <Text style={SinglePieceStyle.author}>{tiedot.kirjailija}</Text>
          <Text style={SinglePieceStyle.detail}>Julkaistu: {tiedot.vuosi}</Text>
          <Text style={SinglePieceStyle.detail}>
            Arvosana: {tiedot.arvosana}
          </Text>
          <Text style={SinglePieceStyle.detail}>
            Onko luettu: {tiedot.onkoLuettu}
          </Text>
          <Text style={SinglePieceStyle.detail}>
            Viimeksi luettu: {tiedot.viimeksiLuettu}
          </Text>
        </View>
      ))}
      <BackButton onPress={() => router.push("/Kirjat")} />
    </View>
  );
}
