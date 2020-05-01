
exports.up = function(knex) {
  return knex.schema
    .createTable("tasks_contexts", tbl => {
        tbl.integer("task_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("tasks")
        tbl.integer("context_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("contexts")
      
        // composite key
        tbl.primary(["task_id", "context_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks_contexts");
};
