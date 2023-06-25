import { post } from "./axios";

export const registerUser = async (userData: any) => {
  const data = await post("/users/users", { body: userData });

  return data;
};

export const loginUserService = async (userData: any) => {
  const data = await post("users/login", { body: userData });
  return data;
};
