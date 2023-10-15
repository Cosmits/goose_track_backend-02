export const login = {
  post: {
    tags: ["Auth"],
    summary: "Login user",
    description: "This login route for the user",
    operationId: "login",
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
      200: {
        description: "Login user",
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

                    token: {
                      description: "Generated json web token",
                      type: "string",
                      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmJkZGQ4YjJjZGNjNGViOWJlZTU3NiIsImlhdCI6MTY5NzM3Mzc4NywiZXhwIjoxNjk3NDU2NTg3fQ.AzunbIeZDzB_dI57b4hiEnqpHMYjjr61XQMI28LzgfI",
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
      401: {
        description: '"Email or password is wrong" or "Email not verified"',
      },
      500: {
        description: "Server error",
      },
    },
  }
};
