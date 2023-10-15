module.exports = {
  get: {
    tags: ["Reviews"],
    summary: "Get all reviews",
    description: "Get all reviews",
    operationId: "getAllReviews",
    responses: {
      200: {
        description: "Get all reviews",
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
                          userName: {
                            type: "string",
                            description: "user name",
                            example: "Andy",
                          },
                          avatarURL: {
                            type: "string",
                            description: "avatar URL",
                            example:
                              "//www.gravatar.com/avatar/ea5d62dd0514683bcd5fcf5c5668f40f",
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
      500: {
        description: "Server error",
      },
    },
  },
};
