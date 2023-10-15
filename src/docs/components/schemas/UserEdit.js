export const UserEdit = {
  UserEdit: {
    type: "object",
    properties: {
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
      avatarURL: {
        type: "string",
        description: "User's avatar URL",
        example: "https://res.cloudinary.com/dnhobiphs/image/upload/v1693572737/avatars/64ef0ce090ff7bcd7e528d14.png",
      },
      avatar: {
        type: "string",
        format: "binary",
        description: "Image file (e.g., JPEG, PNG, GIF)",
      },
    },
  }
};
