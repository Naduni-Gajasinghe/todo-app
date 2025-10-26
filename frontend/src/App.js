import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
      setMessage("⚠️ Unable to fetch tasks. Please try again later.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post(`${API_URL}/tasks`, { title, description });
      setTitle("");
      setDescription("");
      setMessage("✅ Task added successfully!");
      fetchTasks();
    } catch (err) {
      console.error("Error creating task", err);
      setMessage("⚠️ Failed to add task.");
    }
  };

  const markDone = async (id) => {
    try {
      await axios.put(`${API_URL}/tasks/${id}/complete`);
      setMessage("✅ Task marked as completed!");
      fetchTasks();
    } catch (err) {
      console.error("Error marking done", err);
      setMessage("⚠️ Could not mark task as completed.");
    }
  };

  return (
    <div className="container">
      <h1 className="app-title">📝 To-Do Task Manager</h1>

      {message && <div className="message">{message}</div>}

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter task description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <h2 className="section-title">Recent Tasks</h2>
      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li className="task-card" key={task.id}>
              <div className="task-details">
                <strong>{task.title}</strong>
                <p>{task.description}</p>
              </div>
              <button className="done-btn" onClick={() => markDone(task.id)}>
                Done
              </button>
            </li>
          ))
        ) : (
          <p className="no-tasks">No tasks available.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
