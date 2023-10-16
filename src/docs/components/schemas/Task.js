export const Task = {
  Task: {
    type: "object",
    required: ["title", "start", "end", "date", "priority", "category"],
    properties: {
      _id: {
        type: "string",
        description: "Backend-generated unique identifier.",
        example: "652951113f549010b14f64eb",
      },
      title: {
        type: "string",
        description: "Task title",
        example: "Some task",
      },
      date: {
        type: "string",
        description: "task date",
        example: "2023-10-01",
      },
      start: {
        type: "string",
        description: "task start time",
        example: "09:00",
      },
      end: {
        type: "string",
        description: "task end time",
        example: "17:15",
      },
      priority: {
        type: "string",
        description: "Task priority, one of ['low', 'medium', 'high']",
        example: "low",
      },
      category: {
        type: "string",
        description: "Task category, one of ['to-do', 'in-progress', 'done']",
        example: "to-do",
      },
      owner: {
        type: "ObjectId",
        description: "Owner Info",
        example: "ObjectId('some backend-generated unique identifier')",
      },
    },
  }
};
