const express = require("express");
const cors = require("cors");
const path = require("path");

const actualitesRoutes = require("./routes/actualitesRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// 🔥 MIDDLEWARES D'ABORD
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📁 fichiers statiques
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 🌐 ROUTES APRÈS
app.use("/actualites", actualitesRoutes);
app.use("/admins", adminRoutes);
app.use("/auth", authRoutes);

// test backend
app.get("/", (req, res) => {
  res.json({ message: "Backend opérationnel" });
});

// serveur
app.listen(5000, () => {
  console.log("Serveur démarré sur le port 5000");
});