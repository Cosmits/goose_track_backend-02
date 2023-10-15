module.exports = {
  get: {
    tags: ["Auth"],
    summary: "Send verify Email",
    description: "This route send the user verification email",
    operationId: "SendVerify",
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: "Verification email sent",
        content: {
          "application/json": {
            example: {
              code: 200,
              message: "Verification email sent",
              email: {
                type: "string",
                description: "email is verification",
                example: "stepan@gmail.com",
              },
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
