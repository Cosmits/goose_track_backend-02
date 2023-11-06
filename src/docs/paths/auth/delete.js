export const remove = {
  delete: {
    tags: ["Auth"],
    summary: "remove user profile",
    description: "This route remove user profile",
    operationId: "delete",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description: "An example of a request object for remove user profile",
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["secretKey"],
            properties: {
              secretKey: {
                type: "string",
                description: "user ID",
                example: "6529a6de7717f67fcbc2f558",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "The user was successfully remove user profile",
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
                      example: "User has been removed",
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
