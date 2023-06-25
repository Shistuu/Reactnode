import { get, post } from "./axios";

export const fetchUser = async () => {
  const { data, ...other } = await get("/users/allUsers");

  // const { data, ...other } = await get("localhost:4004/users/allUsers");
  console.log("data", data, other);

  return data;
};

export const registerUser = async (userData: any) => {
  const data = await post("/users/users", { body: userData });

  return data;
};

export const loginUserService = async (userData: any) => {
  const data = await post("users/login", { body: userData });
  return data;
};
