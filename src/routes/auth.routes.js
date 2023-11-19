const { Router } = require ("express");

const { authController } = require ("../Controllers/auth.controller.js");

const authRouter = Router();

authRouter.get("/login",    authController.loginGet);
authRouter.post("/login",   authController.loginPost);
authRouter.get("/register", authController.registerGet);
authRouter.post("/register",authController.registerPost);
authRouter.get("/logout",   authController.logout);



module.exports = authRouter