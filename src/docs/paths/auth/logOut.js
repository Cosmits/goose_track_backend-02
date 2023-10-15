export const logout = {
  post: {
    tags: ["Auth"],
    summary: "Log out user",
    description: "This route logout the user",
    operationId: "logout",
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      204: {
        description: "This route logout the user",
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
  }
};
