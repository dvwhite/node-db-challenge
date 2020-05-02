const db = require("../../data/dbConfig");

module.exports = {
  get,
  getById,
  insert,
};

function get() {
  return db("resources");
}

function getById(resource_id) {
  return db("resources as p")
    .where({ "p.id": resource_id })
    .first();
    
}

function insert(resource) {
  const { name, description } = resource;
  return db("resources")
    .insert({ name, description })
    .then((ids) => {
      return getById(ids[0]);
    })
}
