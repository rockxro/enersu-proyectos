import Database from "@tauri-apps/plugin-sql";

const databaseUrl = "sqlite:cotizador.db";

export async function loadDatabase() {
  return Database.load(databaseUrl);
}
