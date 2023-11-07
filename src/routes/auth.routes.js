import { Router } from "express";

const authRouter = Router();

authRouter.get("/login", ( req, res ) => res.send(" Route for Login GET View") );
authRouter.post("/login", ( req, res ) => res.send(" Route for Login POST View") );
authRouter.get("/register", ( req, res ) => res.send(" Route for Register GET View") );
authRouter.post("/register", ( req, res ) => res.send(" Route for Register POST View") );
authRouter.get("/logout", ( req, res ) => res.send(" Route for Logout View") );



export {authRouter}