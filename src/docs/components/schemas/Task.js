module.exports = {
  Task: {
    type: "object",
    required: ["title", "start", "end", "date"],
    properties: {
      _id: {
        type: "string",
        description: "Backend-generated unique identifier.",
        example: "63fa1eb8ed1b46fa6fd8e857",
      },
      title: {
        type: "string",
        description: "Task title",
        example: "Some task",
      },
      start: {
        type: "string",
        description: "task start time",
        example: "09:00",
      },
      end: {
        type: "string",
        description: "task end time",
        example: "09:01",
      },
      priority: {
        type: "string",
        description: "Task priority, one of ['LOW', 'MEDIUM', 'HIGH']",
        example: "LOW",
      },
      date: {
        type: "string",
        description: "task date",
        example: "2023-09-01",
      },
      category: {
        type: "string",
        description: "Task category, one of ['TODO', 'INPROGRESS', 'DONE']",
        example: "TODO",
      },
      owner: {
        type: "ObjectId",
        description: "Owner Info",
        example: "ObjectId('some backend-generated unique identifier')",
      },
    },
  },
};
