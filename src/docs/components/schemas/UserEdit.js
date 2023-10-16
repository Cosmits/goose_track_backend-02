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
        example: "https://s.gravatar.com/avatar/2a745bb2c0f4cbe6102562e535b00508",
      },
    },
  }
};
