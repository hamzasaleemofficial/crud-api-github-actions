const request = require("supertest");
const app = require("../app");

describe("Validation Tests", () => {

    test("POST /tasks without title should return 400", async () => {

        const res = await request(app)
            .post("/tasks")
            .send({});

        expect(res.statusCode).toBe(400);

        expect(res.body.message).toBe("Title is required");

    });

    test("GET invalid task should return 404", async () => {

        const res = await request(app)
            .get("/tasks/999999");

        expect(res.statusCode).toBe(404);

    });

    test("PUT invalid task should return 404", async () => {

        const res = await request(app)
            .put("/tasks/999999")
            .send({
                title: "Test"
            });

        expect(res.statusCode).toBe(404);

    });

    test("DELETE invalid task should return 404", async () => {

        const res = await request(app)
            .delete("/tasks/999999");

        expect(res.statusCode).toBe(404);

    });

});