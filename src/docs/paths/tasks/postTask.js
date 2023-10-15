module.exports = {
  post: {
    tags: ["Tasks"],
    summary: "Add new task",
    description: "Add new task",
    operationId: "postTask",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description: "An example of a request object for Add new task",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["title", "start", "end", "date"],
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
                enum: ["LOW", "MEDIUM", "HIGH"],
                example: "MEDIUM",
              },
              date: {
                type: "string",
                description: "current date",
                example: "2023-10-01",
                pattern: "^20dd-(0[1-9]|1[012])-(0[1-9]|[12]d|3[01])",
              },
              category: {
                type: "string",
                description: "category",
                enum: ["TODO", "INPROGRESS", "DONE"],
                example: "TODO",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "todo added",
        content: {
          "application/json": {
            schema: {
              type: "object",
              allOf: [
                {
                  properties: {
                    status: {
                      type: "number",
                      example: 201,
                    },
                    data: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "ObjectId",
                          example: "64e9e9baa80ec244444c5cc5",
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
                          example: "MEDIUM",
                        },
                        date: {
                          type: "string",
                          example: "2023-09-01",
                        },
                        category: {
                          type: "string",
                          example: "TODO",
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
        description: "Start time must be lower then end time",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
