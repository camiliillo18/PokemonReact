let userLogged = undefined;

export const getUserLogged = () => {
  return userLogged;
};

export const signIn = (user) => {
  userLogged = user;
};

export const logout = () => {
  userLogged = undefined;
};
