const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  getByProjectId,
  insert,
};

function get() {
  return db("resources");
}

function getById(resource_id) {
  return db("resources as r").where({ "r.id": resource_id }).first();
}

function getByProjectId(project_id) {
  return db("resources as r")
    .select(["r.id", "r.name", "r.description"])
    .leftJoin("projects as p", "p.id", "pr.project_id")
    .leftJoin("projects_resources as pr", "r.id", "pr.resource_id")
    .where("p.id", project_id);
}

function insert(resource) {
  const { name, description } = resource;
  return db("resources")
    .insert({ name, description })
    .then((ids) => {
      return getById(ids[0]);
    });
}
