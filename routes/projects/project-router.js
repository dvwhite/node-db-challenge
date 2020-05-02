const express = require("express");
const router = express.Router();

const { get, getById, insert } = require("./project-model");
const { getByProjectId } = require("./../tasks/task-model");
const rdb = require("./../../routes/resources/resource-model");

router.get("/", async (req, res) => {
  try {
    const projects = await get();
    res.status(200).json({
      message: "Success",
      validation: [],
      data: projects.map((project) => convertCompleted(project)),
    });
  } catch (err) {
    errDetail(res, err);
  }
});

router.get("/:id", validateProjectId, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const project = convertCompleted(await getById(id));
    const tasks = convertCompleted(await getByProjectId(id))
    const convTasks = objectToArray(tasks).map(task => convertCompleted(task));
    const resources = objectToArray(await rdb.getByProjectId(id));
    res.status(200).json({
      message: "Success",
      validation: [],
      data: {...project, resources, tasks: convTasks}
    });
  } catch (err) {
    errDetail(res, err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProject = convertCompleted(await insert(req.body));
    res.status(200).json({
      message: "Success",
      validation: [],
      data: newProject,
    });
  } catch (err) {
    errDetail(res, err);
  }
});

// Middlewarae
async function validateProjectId(req, res, next) {
  try {
    const id = Number(req.params.id);
    const project = await getById(id);
    if (!project) {
      return res.status(400).json({
        message: "Bad Request",
        validation: ["Project id doesn't exist"],
        data: {},
      });
    }
    next();
  } catch (err) {
    errDetail(res, err);
  }
}

function errDetail(res, err) {
  console.log(err);
  return res.status(500).json({
    message: "Unable to complete the required operation",
    validation: [],
    data: {},
  });
}

// Helpers
function convertCompleted(obj) {
  // Convert a 0 to false or a 1 to true
  return {
    ...obj,
    completed: obj.completed === 0 ? false : true,
  };
}

function objectToArray(obj) {
  return Object.values(obj);
}

module.exports = router;
