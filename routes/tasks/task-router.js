const express = require("express");
const router = express.Router();

const { get, getById, insert } = require("./task-model");

router.get("/", async (req, res) => {
  try {
    const tasks = await get();
    res.status(200).json({
      message: "Success",
      validation: [],
      data: tasks.map((task) => convertCompleted(task)),
    });
  } catch (err) {
    errDetail(res, err);
  }
});

router.get("/:id", validateTaskId, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const task = convertCompleted(await getById(id));
    res.status(200).json({
      message: "Success",
      validation: [],
      data: task,
    });
  } catch (err) {
    errDetail(res, err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = convertCompleted(await insert(req.body));
    res.status(200).json({
      message: "Success",
      validation: [],
      data: newTask,
    });
  } catch (err) {
    errDetail(res, err);
  }
});

// Middlewarae
async function validateTaskId(req, res, next) {
  try {
    const id = Number(req.params.id);
    const task = await getById(id);
    if (!task) {
      return res.status(400).json({
        message: "Bad Request",
        validation: ["Task id doesn't exist"],
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

module.exports = router;
