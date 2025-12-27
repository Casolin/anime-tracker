export const handleToken = (user) => {
  localStorage.setItem("token", user.token);
};
