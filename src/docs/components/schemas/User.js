export const User = {
  User: {
    type: "object",
    required: ["userName", "email", "password"],
    properties: {
      _id: {
        type: "string",
        description: "Backend-generated unique identifier.",
        example: "63fa1eb8ed1b46fa6fd8e857",
      },
      userName: {
        type: "string",
        description: "User's name",
        example: "Steve Jobs",
      },
      email: {
        type: "string",
        description: "User's email",
        example: "email@gmail.com",
      },
      phone: {
        type: "string",
        description: "User's phone",
        example: "+38 (067) 000 00 00",
      },
      skype: {
        type: "string",
        description: "User's  skype",
        example: "steve_jobs",
      },
      birthDay: {
        type: "string",
        description: "User's  birthDay",
        example: "01/01/2000",
      },
      verify: {
        type: "boolean",
        description: "is verification email",
        example: "false",
      },
      createdAt: {
        type: "string",
        description: "Data&Time create User",
        example: "2023-08-25T18:01:01.709Z",
      },
      updatedAt: {
        type: "string",
        description: "Data&Time update User",
        example: "2023-08-25T23:33:49.514Z",
      },
    },
  }
};
