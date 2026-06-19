const db = require("../config/db");

const addMessage = (req, res) => {
  const { nom, email, message } = req.body;

  const sql =
    "INSERT INTO message (nom, email, message) VALUES (?, ?, ?)";

  db.query(
    sql,
    [nom, email, message],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      // res.json({
      //   success: true,
      //   message: "Message envoyé",
      // });
    }
  );
};

const getMessages = (req, res) => {
  const sql =
    "SELECT * FROM message ORDER BY date DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Erreur SQL :", err);
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json(results);
  });
};

const deleteMessage = (req, res) => {
  const { id } = req.params;

  const sql =
    "DELETE FROM message WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      console.error("Erreur SQL :", err);
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      message: "Message supprimé",
    });
  });
};

module.exports = {
  addMessage,
  getMessages,
  deleteMessage,
};