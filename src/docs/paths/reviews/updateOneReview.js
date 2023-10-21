export const updateOneReview = {
  patch: {
    tags: ["Reviews"],
    summary: "Edit own review",
    description: "Edit own review",
    operationId: "updateOneReview",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description: "An example of a request object for Edit own review",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: [],
            properties: {
              comment: {
                type: "string",
                description: "comment",
                example: "Some comment",
              },
              rating: {
                type: "string",
                description: "rating",
                enum: [0, 1, 2, 3, 4, 5],
                example: 5,
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "review edited",
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
                      example: 200,
                    },
                    data: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "ObjectId",
                          example: "6528510dc5a30471deaa0fd2",
                        },
                        comment: {
                          type: "string",
                          description: "comment",
                          example: "Some comment",
                        },
                        rating: {
                          type: "string",
                          description: "rating",
                          example: 5,
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
        description: "Not found",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
