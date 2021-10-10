export const setAccountDetails = (username, password) => {
  return {
    type: "HEADER_ACTION",
    username,
    password,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_ACTION",
  };
};
