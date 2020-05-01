
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments("id")
        .unique()
      tbl.text("name")
        .notNullable()
      tbl.text("description")
      tbl.boolean("completed")
        .notNullable()
        .defaultTo(false)
    });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("projects");
};
