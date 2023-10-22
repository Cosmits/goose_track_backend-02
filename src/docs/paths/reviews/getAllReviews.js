export const getAllReviews = {
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
                      type: "array",
                      items: {
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
                            type: "number",
                            description: "rating",
                            example: 5,
                          },
                          owner: {
                            $ref: "#/components/schemas/UserForReviews",
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
