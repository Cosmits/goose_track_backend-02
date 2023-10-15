export const Task = {
  Task: {
    type: "object",
    required: ["title", "start", "end", "date"],
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
        description: "Task priority, one of ['LOW', 'MEDIUM', 'HIGH']",
        example: "LOW",
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
  }
};
