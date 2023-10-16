export const current = {
  get: {
    tags: ["Auth"],
    summary: "Get information about the current user",
    description: "This route return information about the current user",
    operationId: "current",
    security: [
      {
        BearerAuth: [],
      },
    ],
    responses: {
      200: {
        description: "Information found",
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
      401: {
        description: "Not Authorized",
      },
      500: {
        description: "Server error",
      },
    },
  }
};
