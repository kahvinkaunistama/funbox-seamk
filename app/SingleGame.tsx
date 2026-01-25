import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import SinglePieceStyle from "@/styles/SinglePieceStyle";

interface PeliInt {
  nimi: string;
  valmistaja: string;
  vuosi: number;
  arvosana: number;
  onkoPelattu: string;
  viimeksiPelattu: string;
}

export default function SingleGame() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [peli, setPeli] = useState<PeliInt[]>([]);
  const db = SQLite.useSQLiteContext();

  useEffect(() => {
    async function haePeli() {
      const result = await db.getAllAsync<PeliInt>(
        "SELECT * FROM pelit WHERE id = (?)",
        parseInt(id),
      );
      setPeli(result);
    }
    if (id) haePeli();
  });

  return (
    <View style={SinglePieceStyle.container}>
      {peli.map((tiedot, index) => (
        <View key={index} style={SinglePieceStyle.card}>
          <Text style={SinglePieceStyle.header}>{tiedot.nimi}</Text>
          <Text style={SinglePieceStyle.author}>{tiedot.valmistaja}</Text>
          <Text style={SinglePieceStyle.detail}>Julkaistu: {tiedot.vuosi}</Text>
          <Text style={SinglePieceStyle.detail}>
            Arvosana: {tiedot.arvosana}
          </Text>
          <Text style={SinglePieceStyle.detail}>
            Onko pelattu: {tiedot.onkoPelattu}
          </Text>
          <Text style={SinglePieceStyle.detail}>
            Viimeksi pelattu: {tiedot.viimeksiPelattu}
          </Text>
        </View>
      ))}
      <BackButton onPress={() => router.push("/Pelit")} />
    </View>
  );
}
