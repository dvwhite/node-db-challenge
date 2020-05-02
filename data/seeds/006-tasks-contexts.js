
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks_contexts").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks_contexts").insert([
        {task_id: 1, context_id: 2},
        {task_id: 1, context_id: 4},
        {task_id: 1, context_id: 5},
        {task_id: 2, context_id: 2},
        {task_id: 2, context_id: 4},
        {task_id: 2, context_id: 5},
        {task_id: 3, context_id: 2},
        {task_id: 3, context_id: 4},
        {task_id: 3, context_id: 5},
        {task_id: 4, context_id: 2},
        {task_id: 4, context_id: 3},
        {task_id: 4, context_id: 4},
        {task_id: 4, context_id: 5},
        {task_id: 5, context_id: 2},
        {task_id: 5, context_id: 4},
        {task_id: 5, context_id: 5},
        {task_id: 6, context_id: 2},
        {task_id: 6, context_id: 4},
        {task_id: 6, context_id: 5},
      ]);
    });
};
