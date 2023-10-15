export const register = {
  post: {
    tags: ["Auth"],
    summary: "Register a new user",
    description: "This route register the user",
    operationId: "register",
    requestBody: {
      description: "An example for creating a new user",
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["name", "email", "password"],
            properties: {
              userName: {
                type: "string",
                description: "userName",
                example: "Steve Jobs",
              },
              email: {
                type: "string",
                description: "E-mail address",
                example: "email@gmail.com",
              },
              password: {
                type: "string",
                description: "Password",
                example: "anyPass123",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "Registration success",
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
                      example: 201,
                    },

                    user: {
                      type: "object",
                      $ref: "#/components/schemas/User",
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
      409: {
        description: "Provided email already exists",
      },
      500: {
        description: "Server error",
      },
    },
  }
};
