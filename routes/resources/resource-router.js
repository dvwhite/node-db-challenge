const express = require("express");
const router = express.Router();

const { get, getById, insert } = require("./resource-model");

router.get("/", async (req, res) => {
  try {
    const resources = await get();
    res.status(200).json({
      message: "Success",
      validation: [],
      data: resources.map((resource) => convertCompleted(resource)),
    });
  } catch (err) {
    errDetail(res, err);
  }
});

router.get("/:id", validateResourceId, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const resource = convertCompleted(await getById(id));
    res.status(200).json({
      message: "Success",
      validation: [],
      data: resource,
    });
  } catch (err) {
    errDetail(res, err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newResource = convertCompleted(await insert(req.body));
    res.status(200).json({
      message: "Success",
      validation: [],
      data: newResource,
    });
  } catch (err) {
    errDetail(res, err);
  }
});

// Middlewarae
async function validateResourceId(req, res, next) {
  try {
    const id = Number(req.params.id);
    const resource = await getById(id);
    if (!resource) {
      return res.status(400).json({
        message: "Bad Request",
        validation: ["Resource id doesn't exist"],
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
