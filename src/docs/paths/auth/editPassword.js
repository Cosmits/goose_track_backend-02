export const editPassword = {
  patch: {
    tags: ["Auth"],
    summary: "edit user password",
    description: "This route edit user password",
    operationId: "editPassword",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description: "An example of a request object for edit user password",
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["oldPassword","newPassword"],
            properties: {
              oldPassword: {
                type: "string",
                description: "Password",
                example: "anyPass123",
              },
              newPassword: {
                type: "string",
                description: "Password",
                example: "newPass123",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "The user was successfully updated password",
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
                    message: {
                      description: "message",
                      type: "string",
                      example: "Password change success",
                    },
                  },
                },
              ],
            },
          },
        },
      },
      400: {
        description: "Bad request (invalid request body)",
      },
      401: {
        description: "Missing header with authorization token",
      },
      500: {
        description: "Server error",
      },
    },
  }
};
