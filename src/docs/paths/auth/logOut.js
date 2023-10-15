module.exports = {
  post: {
    tags: ["Auth"],
    summary: "Log out user",
    description: "This route logs the user out",
    operationId: "logout",
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      204: {
        description: "The user is logged out",
        content: {
          "application/json": {
            example: {
              code: 204,
              message: "No content",
            },
          },
        },
      },
      401: {
        description: "Not authorized",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
