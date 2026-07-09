import ApiService from "./api";

export const googleLogin = async (token) => {
  const response = await ApiService.post("/auth/google", {
    token,
  });

  return response.data;
};

export const login = async (data) => {
  const response = await ApiService.post("/auth/login", data);
  return response.data;
};

export const register = async (data) => {
  const response = await ApiService.post("/auth/register", data);
  return response.data;
};