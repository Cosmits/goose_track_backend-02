export const deleteTask = {
  delete: {
    tags: ["Tasks"],
    summary: "Delete task",
    description: "Delete task",
    operationId: "deleteTask",
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
    responses: {
      200: {
        description: "todo deleted",
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
                          example: "6529a6de7717f67fcbc2f558",
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
                          example: "LOW",
                        },
                        date: {
                          type: "string",
                          example: "2023-10-01",
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