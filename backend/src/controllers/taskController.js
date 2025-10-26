import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({ title, description });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

export const getRecentTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { completed: false },
      order: [["createdAt", "DESC"]],
      limit: 5,
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

export const completeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    task.completed = true;
    await task.save();
    res.json({ message: "Task marked as completed" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
};
