import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

let sequelize;

if (process.env.NODE_ENV === "test") {
  // ✅ Use SQLite in-memory DB for tests
  sequelize = new Sequelize("sqlite::memory:", { logging: false });
} else {
  // ✅ Use MySQL in Docker for normal use
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      logging: false,
    }
  );
}

export default sequelize;
