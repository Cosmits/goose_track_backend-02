module.exports = {
  "/auth/register": require("./register"),
  "/auth/login": require("./logIn"),
  "/auth/logout": require("./logOut"),
  "/auth/current": require("./current"),
  "/auth/user": require("./updateUser"),
  "/auth/sendVerifyEmail": require("./sendVerifyEmail"),
  "/auth/verify/{verificationToken}": require("./verifyEmail"),
  "/auth/sendRenewPass": require("./sendRenewPass"),
  "/auth/changePassword": require("./changePassword"),
};
