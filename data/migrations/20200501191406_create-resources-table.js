
exports.up = function(knex) {
  return knex.schema
    .createTable("resources", tbl => {
      tbl.increments("id")
        .unique()
      tbl.text("name")
        .unique()
        .notNullable()
      tbl.text("description")
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};
