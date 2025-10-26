import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db.js";
import Task from "./models/Task.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

// Only start the server if not in test mode
if (process.env.NODE_ENV !== "test") {
  sequelize
    .sync()
    .then(() => {
      console.log("Database connected and synced!");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("DB connection failed:", err));
}

export default app;
