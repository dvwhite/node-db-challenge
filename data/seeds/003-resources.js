
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "laptop computer", description: "A portable computer with a battery" },
        { name: "projector", description: "Allows for conference room presentations" },
        { name: "time clock", description: "Allow staff on the job site to punch in and out to the work site" },
        { name: "badge reader", description: "A security mechanism to restrict access to certain areas" },
        { name: "backhoe", description: "Utility vehicle used to dig holes" },
        { name: "bulldozer", description: "Utility vehicle for scooping aggregate" },
        { name: "dump truck", description: "A utility vehicle for transporting materials to and from the job site" },
        { name: "tax records", description: "The files containing tax information" },
        { name: "tax preparation software", description: "Software that aids with preparing tax returns" },
        { name: "pencil", description: "A writing device" },
        { name: "pen", description: "A writing device using ink" },
        { name: "paper", description: "Used for writing information" },
      ]);
    });
};
