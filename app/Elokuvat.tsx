import { router } from "expo-router";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import DefaultStyle from "../styles/DefaultStyle";
import HomeButton from "@/components/HomeButton";
import * as SQLite from "expo-sqlite";

export default function Elokuvat() {
  return (
    <View style={DefaultStyle.container}>
      <Text style={DefaultStyle.header}>Elokuvat</Text>
      <Text style={DefaultStyle.text}>Tarkastele alta katsomiasi elokuvia</Text>
      <Content />
      <AddButton onPress={() => router.push("/AddElokuvat")} />
      <HomeButton />
    </View>
  );
}

interface Movie {
  name: string;
  director: string;
}

export function Content() {
  const db = SQLite.useSQLiteContext();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllAsync<Movie>("SELECT * FROM movies");
      setMovies(result);
    }
    setup();
  });

  return (
    <View>
      {movies.map((movie, index) => (
        <View key={index}>
          <Text>{`${movie.name} - ${movie.director}`}</Text>
        </View>
      ))}
    </View>
  );
}
