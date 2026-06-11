const db = require("../config/db");

const login = (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM admin WHERE email = ? AND `password` = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result.length > 0) {
      return res.json({
        success: true,
        admin: result[0],
      });
    }

    return res.status(401).json({
      success: false,
      message: "Email ou mot de passe incorrect",
    });
  });
};

module.exports = { login };