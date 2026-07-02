const express = require("express");

const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

app.use("/", taskRoutes);

module.exports = app;