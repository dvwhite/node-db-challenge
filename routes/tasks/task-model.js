const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  getByProjectId,
  insert,
};

function get() {
  return db("tasks as t")
    .select([
      "t.id",
      "t.description",
      "t.notes",
      "t.completed",
      db.raw("p.name AS project_name"),
      db.raw("p.description as project_description"),
    ])
    .leftJoin("projects as p", "p.id", "t.project_id");
}

function getById(task_id) {
  return db("tasks as p").where({ "p.id": task_id }).first();
}

function getByProjectId(project_id) {
  return db("tasks as t")
    .select([
      "t.id",
      "t.description",
      "t.notes",
      "t.completed",
      db.raw("p.name AS project_name"),
      db.raw("p.description as project_description"),
    ])
    .leftJoin("projects as p", "p.id", "t.project_id")
    .where("t.project_id", project_id);
}

function insert(task) {
  const { description, notes, completed, project_id } = task;
  return db("tasks")
    .insert({ description, notes, completed, project_id })
    .then((ids) => {
      return getById(ids[0]);
    });
}
