const express = require("express");
const router = express.Router();

const {
  get,
  insert
} = require("./task-model");

router.get("/", async (req, res) => {
  try {
    const tasks = await get();
    res.status(200).json({
      message: "Success",
      validation: [],
      data: tasks
    });
  } catch (err) {
    errDetail(res, err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newTask = await insert(req.body);
    res.status(200).json({
      message: "Success",
      validation: [],
      data: newTask
    });
  } catch (err) {
    errDetail(res, err)
  }
})

function errDetail(res, err) {
  console.log(err);
  return res.status(500).json({
    message: "Unable to complete the required operation",
    validation: [],
    data: {},
  });
}

module.exports = router;