// src/index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const uri = process.env.MONGO_URI;

// ✅ Configuración de CORS (solo una vez)
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000", // frontend
  credentials: true
}));

// Middlewares
app.use(helmet());
app.use(express.json());

// Límite global de peticiones
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Demasiadas peticiones, intenta más tarde." }
});
app.use(globalLimiter);

// Rutas
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Auth funcionando ✅");
});

// Conectar a MongoDB y arrancar el servidor
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Conectado a MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB:", err.message || err);
  });
