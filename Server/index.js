import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to Veggies API",
  });
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.clear();

  console.log(chalk.green("╔══════════════════════════════════════════════════════╗"));
  console.log(chalk.green("║                                                      ║"));
  console.log(chalk.green("║           🚀  VEGGIES SERVER STARTED  🚀            ║"));
  console.log(chalk.green("║                                                      ║"));
  console.log(chalk.green("╠══════════════════════════════════════════════════════╣"));

  console.log(
    chalk.cyan(`║  🌐 URL    : http://localhost:${PORT}`).padEnd(54) +
      chalk.green("║")
  );

  console.log(
    chalk.yellow(
      `║  📦 MODE   : ${process.env.NODE_ENV || "development"}`
    ).padEnd(54) + chalk.green("║")
  );

  console.log(
    chalk.magenta(`║  ⏰ STATUS : Running Successfully`)
      .padEnd(54) + chalk.green("║")
  );

  console.log(chalk.green("╚══════════════════════════════════════════════════════╝"));
});