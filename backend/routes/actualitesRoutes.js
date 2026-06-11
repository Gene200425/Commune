const db = require("../config/db");
const express = require("express");
const router = express.Router();
const upload = require("../config/multer");

const {
  getActualites,
  addActualite,
  updateActualite,
  deleteActualite
} = require("../controllers/actualitesController");

router.get("/", (req, res) => {
  const sql = "SELECT * FROM actualites ORDER BY date_publication DESC";

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM actualites WHERE id = ?";

  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json({
        message: "Actualité introuvable"
      });
    }

    res.json(results[0]);
  });
});

router.post(
  "/",
  upload.single("image"),
  addActualite
);

router.put(
  "/:id",
  upload.single("image"),
  updateActualite
);
router.delete(
  "/:id",
  deleteActualite
);
module.exports = router;