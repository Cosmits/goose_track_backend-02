module.exports = {
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
        example: "Stepan Bandera",
      },
      email: {
        type: "string",
        description: "User's email",
        example: "stepan@gmail.com",
      },
      avatarURL: {
        type: "string",
        description: "User's avatar URL",
        example:
          "https://res.cloudinary.com/dnhobiphs/image/upload/v1693572737/avatars/64ef0ce090ff7bcd7e528d14.png",
      },
      phone: {
        type: "string",
        description: "User's phone",
        example: "+38 (098) 000 0000",
      },
      skype: {
        type: "string",
        description: "User's  skype",
        example: "stepan",
      },
      birthDay: {
        type: "string",
        description: "User's  birthDay",
        example: "11/11/1995",
      },
      verify: {
        type: "boolean",
        description: "isVerifikation email",
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
  },
};
