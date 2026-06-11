const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "commune_db",
});

db.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Base de données connectée !");
  }
});

module.exports = db;