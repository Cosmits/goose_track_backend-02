module.exports = {
  post: {
    tags: ["Auth"],
    summary: "Send renew Password",
    description: "This route send the user renew Password in email",
    operationId: "sensRenewPass",
    requestBody: {
      description:
        "In example of a request object for sending a request to send a new password to the user's email",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: "email",
            properties: {
              email: {
                type: "string",
                description: "E-mail address",
                example: "sanjaksms@gmail.com",
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
                code: 200,
                message: "Verification email sent",
                email: {
                  type: "string",
                  description: "email is verification",
                  example: "sanjaksms@gmail.com",
                },
              },
            },
          },
        },
        400: {
          description: "Bad request (invalid request body)",
        },
        500: {
          description: "Server error",
        },
      },
    },
    responses: {
      200: {
        description: "The user is logged out",
        content: {
          "application/json": {
            example: {
              code: 200,
              message: "GeneratePassword email sent",
              email: { type: "string", example: "stepan@gmail.com" },
            },
          },
        },
      },
      400: {
        description: "Bad request (invalid request body)",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
