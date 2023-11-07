import { Router } from "express";

const mainRouter = Router();

mainRouter.get("/home", ( req, res ) => res.send(" Route for Home View") );
mainRouter.get("/contact", ( req, res ) => res.send(" Route for Contact View") );
mainRouter.get("/about", ( req, res ) => res.send(" Route for About View") );
mainRouter.get("/faqs", ( req, res ) => res.send(" Route for Faqs View") );



export {mainRouter}