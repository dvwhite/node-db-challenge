const express = require("express");
const router = express.Router();

const {
  get,
  insert
} = require("./project-model");

router.get("/", async (req, res) => {
  try {
    const projects = await get();
    res.status(200).json({
      message: "Success",
      validation: [],
      data: projects
    });
  } catch (err) {
    errDetail(res, err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProject = await insert(req.body);
    res.status(200).json({
      message: "Success",
      validation: [],
      data: newProject
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