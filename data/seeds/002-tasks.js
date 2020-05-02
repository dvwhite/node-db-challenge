
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { description: "Document the project summary", notes: "", completed: false, project_id: 2 },
        { description: "Outline business reasons", notes: "", completed: false, project_id: 2 },
        { description: "Define the voice of the customer", notes: "For lean six sigma", completed: false, project_id: 3 },
        { description: "Review regulator requirements", notes: "Review with legal", completed: false, project_id: 3 },
        { description: "Define project domain", notes: "", completed: false, project_id: 2 },
        { description: "Identify valuable assets", notes: "Deployment of valuable assets depends on this step", completed: false, project_id: 3 },
      ]);
    });
};
