// const sqlite = require("better-sqlite3-with-prebuilds");
// const sqlite3 = require("sqlite3");
// const db = new sqlite3("./db/carWorkshop.db",sqlite3.OPEN_CREATE);

// exports.db = db;
let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(
  "./db/carWorkshop.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
);

exports.db = db;
