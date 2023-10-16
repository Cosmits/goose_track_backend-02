export const verifyEmail = {
  get: {
    tags: ["Auth"],
    summary: "Verify user email",
    description: "This route verify user email",
    operationId: "verify",
    parameters: [
      {
        $ref: "#/components/parameters/verificationToken",
      },
    ],
    responses: {
      200: {
        description: "The user is logged out",
        content: {
          "application/json": {
            example: {
              status: "OK",
              code: 200,
              message: "Email verification successful",
            },
          },
        },
      },
      404: {
        description: "User not found",
      },
      500: {
        description: "Server error",
      },
    },
  }
};
