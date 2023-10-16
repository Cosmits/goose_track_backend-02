export const getAllTasks = {
  get: {
    tags: ["Tasks"],
    summary: "Get all user tasks",
    description: "Get all user tasks",
    operationId: "getAllTasks",
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        in: "query",
        name: "date",
        description: "current month or current day",
        required: true,
        example: "2023-10 or 2023-10-15",
        content: {
          type: "string",
          pattern: [
            "^20dd-(0[1-9]|1[012])$",
            "^20dd-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$",
            
          ]
        },
      },
    ],
    responses: {
      200: {
        description: "get all tasks for current month",
        content: {
          "application/json": {
            schema: {
              type: "object",
              allOf: [
                {
                  properties: {
                    status: {
                      type: "number",
                      example: 200,
                    },
                    data: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          _id: {
                            type: "ObjectId",
                            example: "6529a6de7717f67fcbc2f558",
                          },
                          title: {
                            type: "string",
                            example: "Some task",
                          },
                          start: {
                            type: "string",
                            example: "13:13",
                          },
                          end: {
                            type: "string",
                            example: "14:14",
                          },
                          priority: {
                            type: "string",
                            example: "medium",
                          },
                          date: {
                            type: "string",
                            example: "2023-09-01",
                          },
                          category: {
                            type: "string",
                            example: "to-do",
                          },
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
      400: {
        description: "missing required fields",
      },
      401: {
        description: "Not authorization",
      },
      500: {
        description: "Server error",
      },
    },
  },
};