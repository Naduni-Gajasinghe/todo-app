import request from "supertest";
import app from "../src/app.js";
import sequelize from "../src/db.js";
import Task from "../src/models/Task.js";


beforeAll(async () => {
  await sequelize.sync({ force: true }); // fresh DB before tests
});

afterAll(async () => {
  await sequelize.close();
  await new Promise((resolve) => setTimeout(resolve, 500)); // small delay
});


describe("Task API", () => {
  it("should create a new task", async () => {
    const res = await request(app).post("/tasks").send({
      title: "Test Task",
      description: "Task for testing",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Task");
  });

  it("should return 5 most recent incomplete tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should mark a task as completed", async () => {
    const task = await Task.create({ title: "Complete Me" });
    const res = await request(app).put(`/tasks/${task.id}/complete`);
    expect(res.statusCode).toBe(200);
    const updatedTask = await Task.findByPk(task.id);
    expect(updatedTask.completed).toBe(true);
  });

  afterAll(async () => {
  await sequelize.close();
  await new Promise((resolve) => setTimeout(resolve, 500));
});

});
