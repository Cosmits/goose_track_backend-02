export const google = {
  get: {
    tags: ["Auth"],
    summary: "Google authentication",
    description: "This route Google authentication user",
    operationId: "google",

    responses: {
      200: {
        description: "Google authentication",
      },
      400: {
        description: "Bad request",
      },
      500: {
        description: "Server error",
      },
    },
  }
};
