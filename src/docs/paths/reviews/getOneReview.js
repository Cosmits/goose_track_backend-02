export const getOneReview = {
  get: {
    tags: ["Reviews"],
    summary: "Get own review",
    description: "Get own review",
    operationId: "getReview",
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: "get own review",
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
                          example: "6528510dc5a30471deaa0fd2",
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
