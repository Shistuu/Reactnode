import { Router } from "express";
import { createUser, getUser, login } from "../controller/User/Usercontroller";
import { auth } from "../middleware/auth";
const router = Router();

router.post("/users", createUser);
router.post("/login", login);
router.get("/auth/:userId", auth, getUser);
export default router;
