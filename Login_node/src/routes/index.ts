import { Router } from "express";
import userRouter from "./Useroutes";
import productRouter from "./Productroutes";

const routes = Router();
routes.use("/users", userRouter);
routes.use("/products", productRouter);

export default routes;
