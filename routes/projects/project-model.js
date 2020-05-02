const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  insert
}

function get() {
  return db("projects");
};

function getById(project_id) {
  return db("projects")
    .where({ id: project_id })
    .first()
};

function insert(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getById(ids[0])
    })
};

