const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  insert
}

function get() {
  return db("tasks");
};

function getById(task_id) {
  return db("tasks")
    .where({ id: task_id })
    .first()
};

function insert(task) {
  return db("tasks")
    .insert(task)
    .then(ids => {
      return getById(ids[0])
    })
};

