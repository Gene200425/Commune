const db = require("../config/db");

const getAdmins = (req, res) => {
  const sql = "SELECT * FROM admin";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

module.exports = {
  getAdmins,
};