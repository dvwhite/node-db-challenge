
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contexts").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("contexts").insert([
        {name: "at home"},
        {name: "at work"},
        {name: "at a construction site"},
        {name: "at a computer"},
        {name: "online"}
      ]);
    });
};
