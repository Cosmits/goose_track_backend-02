export const addTask = {
  post: {
    tags: ["Tasks"],
    summary: "Add tasks",
    description: "Add user tasks",
    operationId: "addTask",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description: "Example of a request object for Add new task",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["title", "start", "end", "priority", "date", "category"],
            properties: {
              title: {
                type: "string",
                description: "title",
                example: "Some task",
              },
              start: {
                type: "string",
                description: "start time",
                example: "13:13",
                pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$",
              },
              end: {
                type: "string",
                description: "end time",
                example: "14:14",
                pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$",
              },
              priority: {
                type: "string",
                description: "priority",
                enum: ['low', 'medium', 'high'],
                example: "low",
              },
              date: {
                type: "string",
                description: "current date",
                example: "2023-10-01",
                pattern: "^20dd-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$",
              },
              category: {
                type: "string",
                description: "category",
                enum: ['to-do', 'in-progress', 'done'],
                example: "to-do",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "to-do added",
        content: {
          "application/json": {
            schema: {
              type: "object",
              allOf: [
                {
                  properties: {
                    status: {
                      description: "Status type",
                      type: "string",
                      example: "OK",
                    },
                    code: {
                      description: "Status code",
                      type: "number",
                      example: 201,
                    },
                    data: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "ObjectId",
                          example: "652951113f549010b14f64eb",
                        },
                        title: {
                          type: "string",
                          example: "Some task",
                        },
                        start: {
                          type: "string",
                          example: "09:00",
                        },
                        end: {
                          type: "string",
                          example: "17:15",
                        },
                        priority: {
                          type: "string",
                          example: "low",
                        },
                        date: {
                          type: "string",
                          example: "2023-10-01",
                        },
                        category: {
                          type: "string",
                          example: "to-do",
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
      406: {
        description: "Start time must be > then end time",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
