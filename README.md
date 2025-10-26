# 🧩 To-Do Task Manager (Full Stack Assessment)

A simple full-stack **To-Do Task Web Application** built for the **Full Stack Engineer/Intern Take-Home Assessment**.  
The app allows users to create and manage tasks, mark them as completed, and view only the most recent five pending tasks.  
All components (frontend, backend, and database) run seamlessly inside Docker containers.

---

## 🚀 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React (JavaScript, Axios) |
| **Backend API** | Node.js + Express |
| **Database** | MySQL |
| **Containerization** | Docker + Docker Compose |

---

## ⚙️ Architecture Overview

```
+---------------------------+
|        Frontend (React)   |
|  - Task input form        |
|  - Displays latest tasks  |
|  - Axios for API calls    |
+-------------+-------------+
              |
              | REST API calls
              v
+---------------------------+
|     Backend (Node.js)     |
|  - Express REST API       |
|  - Sequelize ORM          |
|  - CRUD endpoints         |
+-------------+-------------+
              |
              | MySQL connection
              v
+---------------------------+
|       Database (MySQL)    |
|  - task table             |
|  - Columns: id, title,    |
|    description, completed |
|    createdAt, updatedAt   |
+---------------------------+
```

---

## 🧰 Features

✅ Create new tasks (title + description)  
✅ View only **5 most recent** incomplete tasks  
✅ Mark a task as completed (hides it from the UI)  
✅ Backend and database run in Docker containers  
✅ Configurable environment variables  
✅ Clean REST API structure  

---

## 🐳 Running the Project (Docker)

### 1️⃣ Prerequisites
Ensure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/Naduni-Gajasinghe/todo-app.git
cd todo-app
```

### 3️⃣ Start the Application
```bash
docker-compose up --build
```

This command will:
- Build the **frontend**, **backend**, and **MySQL** images  
- Start all three containers  
- Automatically connect them via the same Docker network  

### 4️⃣ Access the App
Once built:
- **Frontend:** http://localhost:3000  
- **Backend API:** http://localhost:5000  

---

## 🧱 Backend API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| **POST** | `/tasks` | Create a new task |
| **GET** | `/tasks` | Get 5 most recent incomplete tasks |
| **PUT** | `/tasks/:id/complete` | Mark a task as completed |

Example:
```bash
POST http://localhost:5000/tasks
Body:
{
  "title": "Finish assessment",
  "description": "Complete all test cases before deadline"
}
```

---

## 🧩 Database Structure

**Table:** `task`

| Column | Type | Description |
|---------|------|-------------|
| id | INT (PK, auto increment) | Unique task ID |
| title | VARCHAR(255) | Task title |
| description | TEXT | Task details |
| completed | BOOLEAN | Default false |
| createdAt | DATETIME | Timestamp |
| updatedAt | DATETIME | Timestamp |

---

## 🧪 Testing (Optional Bonus)

To run backend tests (if implemented):
```bash
cd backend
npm test
```

Recommended frameworks: Jest / Mocha + Supertest

---

## 🎨 UI Preview

Users can:
- Enter a new task title and description  
- View the 5 most recent active tasks  
- Click “Done” to mark completion (instantly disappears)

---

## 💡 Notes for Evaluator

- The system uses **Sequelize ORM** for DB operations  
- All environment variables are configured through Docker Compose  
- MySQL database is initialized automatically on first build  
- Containers can be restarted with no manual setup required  

---

## 👩‍💻 Author

**Name:** Naduni Gajasinghe  
**University:** University of Moratuwa  
**Role:** Full Stack Developer / Intern Candidate  

---

## 🏁 End

This project fulfills **all functional and architectural requirements** stated in the assessment and demonstrates:
- Proper containerization  
- Modular and maintainable code  
- Functional and responsive UI  
- Correct REST API design  
