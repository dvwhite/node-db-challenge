
exports.up = function(knex) {
  return knex.schema
    .createTable("contexts", tbl => {
      tbl.increments("id")
        .unique()
      tbl.text("name")
        .notNullable()
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("contexts");
};
