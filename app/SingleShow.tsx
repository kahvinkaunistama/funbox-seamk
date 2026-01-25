import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import SinglePieceStyle from "@/styles/SinglePieceStyle";

interface SarjaInt {
  nimi: string;
  vuosi: number;
  arvosana: number;
  onkoKatsottu: string;
  viimeksiKatsottu: string;
}

export default function SingleShow() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [sarja, setSarja] = useState<SarjaInt[]>([]);
  const db = SQLite.useSQLiteContext();

  useEffect(() => {
    async function haeSarja() {
      const result = await db.getAllAsync<SarjaInt>(
        "SELECT * FROM sarjat WHERE id = (?)",
        parseInt(id),
      );
      setSarja(result);
    }
    if (id) haeSarja();
  });

  return (
    <View style={SinglePieceStyle.container}>
      {sarja.map((tiedot, index) => (
        <View key={index} style={SinglePieceStyle.card}>
          <Text style={SinglePieceStyle.header}>{tiedot.nimi}</Text>
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
      <BackButton onPress={() => router.push("/Sarjat")} />
    </View>
  );
}
