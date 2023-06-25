import { get, post } from "./axios";

export const addProduct = async (userData: any) => {
  const data = await post("/products/products", { body: userData });

  return data;
};

export const fetchProduct = async () => {
  const { data } = await get("/products/products");
  return data;
};
