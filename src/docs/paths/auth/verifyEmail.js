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
              code: 200,
              message: "Email verification successful",
              status: {
                description: "Status type",
                type: "string",
                example: "Verification successful",
              },
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
