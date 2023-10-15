module.exports = {
  patch: {
    tags: ["Reviews"],
    summary: "Edit own review",
    description: "Edit own review",
    operationId: "patchReview",
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
              review: {
                type: "string",
                description: "review",
                example: "Some review",
              },
              rating: {
                type: "string",
                description: "rating",
                enum: [1, 2, 3, 4, 5],
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
                        review: {
                          type: "string",
                          description: "review",
                          example: "Some review",
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
