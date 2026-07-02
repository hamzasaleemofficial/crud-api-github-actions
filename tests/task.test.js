const request = require("supertest");
const app = require("../app");

let taskId;

describe("Task CRUD API", () => {

    test("GET / should return welcome message", async () => {

        const res = await request(app).get("/");

        expect(res.statusCode).toBe(200);

        expect(res.body.message).toBe("Welcome to Node CRUD API");

    });

    test("POST /tasks should create a task", async () => {

        const res = await request(app)
            .post("/tasks")
            .send({
                title: "Learn Docker"
            });

        expect(res.statusCode).toBe(201);

        expect(res.body.title).toBe("Learn Docker");

        expect(res.body.completed).toBe(false);

        taskId = res.body.id;

    });

    test("GET /tasks should return all tasks", async () => {

        const res = await request(app).get("/tasks");

        expect(res.statusCode).toBe(200);

        expect(Array.isArray(res.body)).toBe(true);

        expect(res.body.length).toBeGreaterThan(0);

    });

    test("GET /tasks/:id should return a task", async () => {

        const res = await request(app).get(`/tasks/${taskId}`);

        expect(res.statusCode).toBe(200);

        expect(res.body.id).toBe(taskId);

    });

    test("PUT /tasks/:id should update task", async () => {

        const res = await request(app)
            .put(`/tasks/${taskId}`)
            .send({
                title: "Learn Kubernetes",
                completed: true
            });

        expect(res.statusCode).toBe(200);

        expect(res.body.title).toBe("Learn Kubernetes");

        expect(res.body.completed).toBe(true);

    });

    test("DELETE /tasks/:id should delete task", async () => {

        const res = await request(app)
            .delete(`/tasks/${taskId}`);

        expect(res.statusCode).toBe(200);

        expect(res.body.message).toBe("Task deleted successfully");

    });

    test("GET deleted task should return 404", async () => {

        const res = await request(app)
            .get(`/tasks/${taskId}`);

        expect(res.statusCode).toBe(404);

    });

});