
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Rebuild the World Trade Center", description: "Start the project planning phase for rebuilding the world trade center as a symbol of hope for all Americans", completed: true },
        { name: "Create a Lean software development lifecycle model", description: "Investigate a Lean model for software development as an alternative to agile", completed: false },
        { name: "Generate a novel project management platform and system", description: "Develop the project charter, with all outlined tasks", completed: false },
        { name: "Prepare 2020 tax returns", description: "Do the quarterly tax returns for Q2 2020", completed: false },
      ]);
    });
};
