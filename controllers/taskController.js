const tasks = require("../data/tasks");

// Health Check
exports.health = (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is healthy"
    });
};

// Home
exports.home = (req, res) => {
    res.json({
        message: "Welcome to Node CRUD API"
    });
};

// Get All Tasks
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// Get Single Task
exports.getTask = (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json(task);
};

// Create Task
exports.createTask = (req, res) => {

    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

    const task = {
        id: Date.now(),
        title,
        completed: false
    };

    tasks.push(task);

    res.status(201).json(task);
};

// Update Task
exports.updateTask = (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const { title, completed } = req.body;

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
};

// Delete Task
exports.deleteTask = (req, res) => {

    const id = Number(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks.splice(index, 1);

    res.json({
        message: "Task deleted successfully"
    });
};