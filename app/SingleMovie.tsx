import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import SinglePieceStyle from "@/styles/SinglePieceStyle";

interface ElokuvaInt {
  nimi: string;
  ohjaaja: string;
  vuosi: number;
  arvosana: number;
  onkoKatsottu: string;
  viimeksiKatsottu: string;
}

export default function SingleMovie() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [elokuva, setElokuva] = useState<ElokuvaInt[]>([]);
  const db = SQLite.useSQLiteContext();

  useEffect(() => {
    async function haeElokuva() {
      const result = await db.getAllAsync<ElokuvaInt>(
        "SELECT * FROM elokuvat WHERE id = (?)",
        parseInt(id),
      );
      setElokuva(result);
    }
    if (id) haeElokuva();
  });

  return (
    <View style={SinglePieceStyle.container}>
      {elokuva.map((tiedot, index) => (
        <View key={index} style={SinglePieceStyle.card}>
          <Text style={SinglePieceStyle.header}>{tiedot.nimi}</Text>
          <Text style={SinglePieceStyle.author}>{tiedot.ohjaaja}</Text>
          <Text style={SinglePieceStyle.detail}>Julkaistu: {tiedot.vuosi}</Text>
          <Text style={SinglePieceStyle.detail}>
            Arvosana: {tiedot.arvosana}
          </Text>
          <Text style={SinglePieceStyle.detail}>
            Onko katsottu: {tiedot.onkoKatsottu}
          </Text>
          <Text style={SinglePieceStyle.detail}>
            Viimeksi katsottu: {tiedot.viimeksiKatsottu}
          </Text>
        </View>
      ))}
      <BackButton onPress={() => router.push("/Elokuvat")} />
    </View>
  );
}
