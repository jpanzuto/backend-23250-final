import { Router } from "express";
import * as authController from "../controllers/authController.js";

const authRouter = Router();

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.get("/signup", authController.getSignup);
authRouter.post("/signup", authController.postSignup);

export default authRouter;
