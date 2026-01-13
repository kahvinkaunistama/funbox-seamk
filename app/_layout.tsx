import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import BottomBar from "../components/BottomBar";
import * as SQLite from "expo-sqlite";
import { Suspense } from "react";

export default function Layout() {
  return (
    <Suspense>
      <View style={styles.container}>
        <SQLite.SQLiteProvider
          databaseName="funbox-library.db"
          onInit={migrateDbIfNeeded}
        >
          {/* Näyttöjen sisältö */}
          <View style={styles.content}>
            <Stack />
          </View>

          {/* Alapalkki */}
          <BottomBar />
        </SQLite.SQLiteProvider>
      </View>
    </Suspense>
  );
}

async function migrateDbIfNeeded(db: SQLite.SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version");
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE movies (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, director TEXT NOT NULL);
`);
    await db.runAsync(
      "INSERT INTO movies (name, director) VALUES (?, ?)",
      "Us",
      "Jordan Peele",
    );
    await db.runAsync(
      "INSERT INTO movies (name, director) VALUES (?, ?)",
      "The Hateful Eight",
      "Quentin Tarantino",
    );
    currentDbVersion = 1;
  }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
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
