module.exports = {
  delete: {
    tags: ["Reviews"],
    summary: "Delete own review",
    description: "Delete own review",
    operationId: "deleteReview",
    security: [
      {
        BearerAuth: [],
      },
    ],
    // requestBody: {
    //   description: "An example of a request object for Delete own review",
    //   required: false,
    //   content: {type:'null'},
    // },
    responses: {
      200: {
        description: "review deleted",
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
