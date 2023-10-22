export const deleteOwnReview = {
  delete: {
    tags: ["Reviews"],
    summary: "Delete own review",
    description: "Delete own review",
    operationId: "deleteOwnReviews",
    security: [
      {
        BearerAuth: [],
      },
    ],
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
                          type: "number",
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
