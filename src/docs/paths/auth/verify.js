export const verify = {
  post: {
    tags: ["Auth"],
    summary: "Send verify Email",
    description: "This route send the user verification email",
    operationId: "verify",
    requestBody: {
      description: "An example of a request object for user login",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["email", "password"],
            properties: {
              email: {
                type: "string",
                description: "E-mail address",
                example: "email@gmail.com",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "Verification email sent",
        content: {
          "application/json": {
            example: {
              status: "OK",
              code: 200,
              message: "Verification email sent",
              email: "email@gmail.com",
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
