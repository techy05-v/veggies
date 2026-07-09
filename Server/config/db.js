import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      chalk.blue(
        `║  🍃 MONGODB: Connected (${conn.connection.host})`
      ).padEnd(54) + chalk.green("║")
    );

    return conn; // ✅ add this
  } catch (error) {
    console.log(
      chalk.red(`║  ❌ MONGODB: Connection Failed`).padEnd(54) + chalk.green("║")
    );
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

export default connectDB;