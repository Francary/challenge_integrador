import { Router } from "express";

import { authController } from "../Controllers/auth.controller.js";

const authRouter = Router();

authRouter.get("/login",    authController.loginGet);
authRouter.post("/login",   authController.loginPost);
authRouter.get("/register", authController.registerGet);
authRouter.post("/register",authController.registerPost);
authRouter.get("/logout",   authController.logout);



export  {authRouter}