module.exports = {
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
                    token: {
                      type: "string",
                      description: "Backend-generated unique json web token",
                      example: "adsjkasnxz.csdcdfgdvgfhgfdcs.saxsa",
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
  },
};
