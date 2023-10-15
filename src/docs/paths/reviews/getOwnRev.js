module.exports = {
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
    // requestBody: {
    //   description: "An example of a request object for get own review",
    //   required: false,
    //   content: {
    //     "application/json": { schema: { type: "string", required: false } },
    //   },
    // },
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
