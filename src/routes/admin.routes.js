import { Router } from "express";

const adminRouter = Router();

adminRouter.get("/", ( req, res ) => res.send(" Route for Admin View") );
adminRouter.get("/create", ( req, res ) => res.send(" Route for Admin Create GET View") );
adminRouter.post("/create", ( req, res ) => res.send(" Route for Admin Create POST View") );
adminRouter.get("/edit/:id", ( req, res ) => res.send(" Route for Admin Edit ID GET View") );
adminRouter.put("/edit/:id", ( req, res ) => res.send(" Route for Admin Edit ID PUT View") );
adminRouter.delete("/delete/:id", ( req, res ) => res.send(" Route for Admin View") );



export {adminRouter}