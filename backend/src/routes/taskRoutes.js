import express from "express";
import { createTask, getRecentTasks, completeTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getRecentTasks);
router.put("/:id/complete", completeTask);

export default router;
