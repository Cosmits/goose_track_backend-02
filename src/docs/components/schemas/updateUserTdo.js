module.exports = {
  updateUserTdo: {
    type: "object",
    properties: {
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
      avatar: {
        type: "string",
        format: "binary",
        description: "Image file (e.g., JPEG, PNG, GIF)",
      },
    },
  },
};
