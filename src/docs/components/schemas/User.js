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
        example: "+380671234567",
      },
      skype: {
        type: "string",
        description: "User's  skype",
        example: "steve_jobs",
      },
      birthday: {
        type: "string",
        description: "User's  birthday",
        example: "01/01/2000",
      },
      avatarURL: {
        type: "string",
        description: "User's avatar URL",
        example: "https://s.gravatar.com/avatar/2a745bb2c0f4cbe6102562e535b00508",
      },
      verify: {
        type: "boolean",
        description: "is verification email",
        example: "false",
      },
      createdAt: {
        type: "string",
        description: "Data&Time create User",
        example: "2023-10-11T18:01:01.709Z",
      },
      updatedAt: {
        type: "string",
        description: "Data&Time update User",
        example: "2023-10-11T23:33:49.514Z",
      },
    },
  }
};
