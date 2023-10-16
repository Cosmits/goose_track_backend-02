const clearSecretUserField = (currentUser) => { 
  currentUser.password = undefined;
  currentUser.token = undefined;
  currentUser.verificationToken = undefined;

  return currentUser;
}

export default clearSecretUserField