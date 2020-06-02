
exports.up = function(knex) {
  return knex.schema
    .createTable("projects_resources", tbl => {
        tbl.integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
        tbl.integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
      
        // composite key
        tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects_resources");
};
