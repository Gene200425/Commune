
const db = require("../config/db");

const getActualites = (req, res) => {
  const sql = "SELECT * FROM actualites ORDER BY date_publication DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

const addActualite = (req, res) => {
  const { titre, contenu } = req.body;

  const image = req.file
    ? req.file.filename
    : null;

  const sql =
    "INSERT INTO actualites (titre, contenu, image) VALUES (?, ?, ?)";

  db.query(
    sql,
    [titre, contenu, image],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        success: true,
        message: "Actualité ajoutée",
      });
    }
  );
};

const updateActualite = (req, res) => {
  const { id } = req.params;
  const { titre, contenu } = req.body;

  let sql;
  let values;

  if (req.file) {
    sql =
      "UPDATE actualites SET titre=?, contenu=?, image=? WHERE id=?";

    values = [
      titre,
      contenu,
      req.file.filename,
      id,
    ];
  } else {
    sql =
      "UPDATE actualites SET titre=?, contenu=? WHERE id=?";

    values = [
      titre,
      contenu,
      id,
    ];
  }

  db.query(sql, values, (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      message: "Actualité modifiée",
    });
  });
};

const deleteActualite = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM actualites WHERE id=?";

  db.query(sql, [id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      success: true,
      message: "Actualité supprimée",
    });
  });
};

module.exports = {
  getActualites,
  addActualite,
  updateActualite,
  deleteActualite,
};