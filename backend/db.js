const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Connect to database.db (creates file if not exists)
const db = new sqlite3.Database(path.resolve(__dirname, "database.db"), (err) => {
  if (err) console.error("SQLite connection error:", err.message);
  else console.log("Connected to SQLite database.db");
});

module.exports = db;
