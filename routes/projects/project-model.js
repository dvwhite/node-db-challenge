const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  insert,
};

function get() {
  return db("projects");
}

function getById(project_id) {
  return db("projects as p")
    .where({ "p.id": project_id })
    .first();
    
}

function insert(project) {
  const { name, description, completed } = project;
  return db("projects")
    .insert({ name, description, completed })
    .then((ids) => {
      return getById(ids[0]);
    })
}
