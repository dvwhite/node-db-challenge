const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  insert,
};

function get() {
  return db("tasks");
}

function getById(task_id) {
  return db("tasks as p")
    .where({ "p.id": task_id })
    .first();
    
}

function insert(task) {
  const { description, notes, completed, project_id } = task;
  return db("tasks")
    .insert({ description, notes, completed, project_id })
    .then((ids) => {
      return getById(ids[0]);
    })
}
