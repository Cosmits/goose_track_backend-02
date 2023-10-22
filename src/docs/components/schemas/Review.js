export const Review = {
  Review: {
    type: "object",
    required: ["review", "rating"],
    properties: {
      _id: {
        type: "string",
        description: "Backend-generated unique identifier.",
        example: "63fa1eb8ed1b46fa6fd8e857",
      },
      comment: {
        type: "string",
        description: "Review text",
        example: "Some comment",
      },
      rating: {
        type: "number",
        description: "App rating must be between, *(1-5)",
        example: 5,
      },
      owner: {
        type: "ObjectId",
        description: "Review owner id",
        example: "ObjectId('some backend-generated unique identifier')",
      },
    },
  }
};
