export const updateTask = {
  patch: {
    tags: ["Tasks"],
    summary: "Update task",
    description: "Update task",
    operationId: "updateTask",
    security: [
      {
        BearerAuth: [],
      },
    ],
    parameters: [
      {
        in: "path",
        name: "id",
        description: "Task's id",
        required: true,
        example: "6529a6de7717f67fcbc2f558",
        type: "string",
      },
    ],
    requestBody: {
      description: "An example of a request object for edit task",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              title: {
                type: "string",
                description: "title",
                example: "Some task",
              },
              start: {
                type: "string",
                description: "start time",
                example: "09:00",
                pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$",
              },
              end: {
                type: "string",
                description: "end time",
                example: "17:15",
                pattern: "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$",
              },
              priority: {
                type: "string",
                description: "priority",
                enum: ["LOW", "MEDIUM", "HIGH"],
                example: "LOW",
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
                enum: ["TODO", "INPROGRESS", "DONE"],
                example: "TODO",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "todo edited",
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
      404: {
        description: "is not valid id/not found",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
