import { Stack } from "expo-router";
import * as SQLite from "expo-sqlite";
import { Suspense } from "react";
import { StyleSheet, View } from "react-native";
import BottomBar from "../components/BottomBar";

export default function Layout() {
  return (
    <Suspense>
      <View style={styles.container}>
        <SQLite.SQLiteProvider databaseName="funbox-testi1" onInit={initDb}>
          {/* Näyttöjen sisältö */}
          <View style={styles.content}>
            <Stack screenOptions={{ headerShown: false }} />
          </View>
          {/* Alapalkki */}
          <BottomBar />
        </SQLite.SQLiteProvider>
      </View>
    </Suspense>
  );
}

async function initDb(db: SQLite.SQLiteDatabase) {
  await db.execAsync("DROP TABLE IF EXISTS movies;");

  await db.execAsync("DROP TABLE IF EXISTS elokuvat;");
  await db.execAsync("DROP TABLE IF EXISTS kirjat;");
  await db.execAsync("DROP TABLE IF EXISTS pelit;");
  await db.execAsync("DROP TABLE IF EXISTS sarjat;");

  await db.execAsync(`
    PRAGMA journal_mode = 'wal';
  `);

  // // Check if the table exists
  // const result = await db.getFirstAsync<{ count: number }>(
  //   "SELECT count(*) as count FROM sqlite_master WHERE type='table' AND name='movies';"
  // );

  // if (result?.count === 0) {
  await db.execAsync(`
PRAGMA journal_mode = 'wal';

CREATE TABLE elokuvat (id INTEGER PRIMARY KEY NOT NULL, nimi TEXT NOT NULL, ohjaaja TEXT, vuosi INTEGER, arvosana INTEGER, onkoKatsottu TEXT, viimeksiKatsottu TEXT);

CREATE TABLE pelit (id INTEGER PRIMARY KEY NOT NULL, nimi TEXT NOT NULL, valmistaja, vuosi INTEGER, arvosana INTEGER, onkoPelattu TEXT, viimeksiPelattu TEXT);

CREATE TABLE kirjat (id INTEGER PRIMARY KEY NOT NULL, nimi TEXT NOT NULL, kirjailija, vuosi INTEGER, arvosana INTEGER, onkoLuettu TEXT, viimeksiLuettu TEXT);

CREATE TABLE sarjat (id INTEGER PRIMARY KEY NOT NULL, nimi TEXT NOT NULL, vuosi INTEGER, arvosana INTEGER, onkoKatsottu TEXT, viimeksiKatsottu TEXT);
`);
  await db.runAsync(
    "INSERT INTO elokuvat (nimi, ohjaaja, vuosi, arvosana, onkoKatsottu, viimeksiKatsottu) VALUES (?, ?, ?, ?, ?, ?)",
    "Us",
    "Jordan Peele",
    2022,
    7,
    "Kyllä",
    "2025-11-10",
  );
  await db.runAsync(
    "INSERT INTO elokuvat (nimi, ohjaaja) VALUES (?, ?)",
    "The Hateful Eight",
    "Quentin Tarantino",
  );

  await db.runAsync(
    "INSERT INTO elokuvat (nimi, ohjaaja) VALUES (?, ?)",
    "Matikan perusteet",
    "Pasi Mikkonen",
  );
  await db.runAsync(
    "INSERT INTO kirjat (nimi, kirjailija) VALUES (?, ?)",
    "Matikan perusteet",
    "Pasi Mikkonen",
  );
  await db.runAsync(
    "INSERT INTO pelit (nimi, valmistaja) VALUES (?, ?)",
    "God of War",
    "Santa Monica Studios",
  );
  await db.runAsync(
    "INSERT INTO sarjat (nimi, vuosi) VALUES (?, ?)",
    "Stargate SG-1",
    1997,
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 0, // ettei sisältö mene palkin alle
  },
});
