import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

// Connect MongoDB
const conn = await connectDB();

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to Veggies API",
  });
});
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.clear();

  console.log(
    chalk.green(
      "╔════════════════════════════════════════════════════════════╗"
    )
  );
  console.log(
    chalk.green(
      "║                                                            ║"
    )
  );
  console.log(
    chalk.green(
      "║             🚀  VEGGIES SERVER STARTED  🚀                ║"
    )
  );
  console.log(
    chalk.green(
      "║                                                            ║"
    )
  );
  console.log(
    chalk.green(
      "╠════════════════════════════════════════════════════════════╣"
    )
  );

  console.log(
    chalk.cyan(
      `║  🌐 URL        : http://localhost:${PORT}`
    ).padEnd(60) + chalk.green("║")
  );

  console.log(
    chalk.yellow(
      `║  📦 MODE       : ${process.env.NODE_ENV || "development"}`
    ).padEnd(60) + chalk.green("║")
  );

  console.log(
    chalk.blue(
      `║  🍃 DATABASE   : ${conn.connection.name}`
    ).padEnd(60) + chalk.green("║")
  );

  console.log(
    chalk.green(
      `║  ✅ MONGODB    : Connected`
    ).padEnd(60) + chalk.green("║")
  );

  console.log(
    chalk.magenta(
      `║  ⏰ STATUS     : Running Successfully`
    ).padEnd(60) + chalk.green("║")
  );

  console.log(
    chalk.green(
      "╚════════════════════════════════════════════════════════════╝"
    )
  );
});