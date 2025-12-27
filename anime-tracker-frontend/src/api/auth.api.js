import api from "./axios";

export const loginRequest = async (data) => {
  const response = await api.post("/login", data);
  return response.data;
};

export const registerRequest = async (data) => {
  const response = await api.post("/register", data);
  return response.data;
};

export const logoutRequest = async () => {
  localStorage.removeItem("token");
};
