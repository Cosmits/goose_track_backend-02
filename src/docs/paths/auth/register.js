module.exports = {
  post: {
    tags: ["Auth"],
    summary: "Register a new user",
    description: "This route registers the user",
    operationId: "register",
    requestBody: {
      description: "An example of a request object for creating a new user",
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
                example: "Stepan Bandera",
              },
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
      201: {
        description: "Registration success",
        content: {
          "application/json": {
            schema: {
              type: "object",
              allOf: [
                {
                  properties: {
                    code: {
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
  },
};
