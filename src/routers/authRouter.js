import { Router } from "express";
import * as authController from "../controllers/authController.js";
import upload from "../middlewares/uploads.js";

const authRouter = Router();

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.get("/signup", authController.getSignup);
authRouter.post(
  "/signup",
  upload.single("imageProfile"),
  authController.postSignup
);

export default authRouter;
