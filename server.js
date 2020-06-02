const express = require("express");
const server = express();
const cors = require("cors");
const projectRoutes = require("./routes/projects/project-router");
const resourceRoutes = require("./routes/resources/resource-router");
const taskRoutes = require("./routes/tasks/task-router");

// Middleware
server.use(express.json());
server.use(cors());

// Routes
server.use("/api/projects", projectRoutes);
server.use("/api/resources", resourceRoutes);
server.use("/api/tasks", taskRoutes);

// Error middleware
server.use((err, req, res, next) => {
  console.log(err)
  if (err) {
    return res.status(500).json({
      message: "There was an error performing the required operation",
      validation: [],
      data: {}
    });
  }
})

module.exports = server;