module.exports = {
  post: {
    tags: ["Auth"],
    summary: "Login user",
    description: "This route logs the user",
    operationId: "logIn",
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
                example: "StepanBandera@gmail.com",
              },
              password: {
                type: "string",
                description: "Password",
                example: "asd23asd12",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "User is logged in",
        content: {
          "application/json": {
            schema: {
              type: "object",
              allOf: [
                {
                  properties: {
                    user: {
                      type: "object",
                      $ref: "#/components/schemas/User",
                    },
                    token: {
                      type: "string",
                      description: "Backend-generated unique json web token",
                      example: "adsjkasnxz.csdcdfgdvgfhgfdcs.saxsa",
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
  },
};
