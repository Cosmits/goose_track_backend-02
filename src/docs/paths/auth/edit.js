export const edit = {
  patch: {
    tags: ["Auth"],
    summary: "Update user",
    description: "This route updates user's information",
    operationId: "edit",
    security: [
      {
        BearerAuth: [],
      },
    ],
    requestBody: {
      description: "An example of a request object for updating user",
      content: {
        "multipart/form-data": {
          schema: {
            $ref: "#/components/schemas/UserEdit",
          },
        },
      },
    },
    responses: {
      200: {
        description: "The user was successfully updated",
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
                    user: {
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
        description: "Missing header with authorization token",
      },
      500: {
        description: "Server error",
      },
    },
  }
};
