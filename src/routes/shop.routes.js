import { Router } from "express";

const shopRouter = Router();
shopRouter.get("/", ( req, res ) => res.send(" Route for Shop View") );
shopRouter.get("/item/:id", ( req, res ) => res.send(" Route for Shop View for ID") );
shopRouter.post("/item/:id/add", ( req, res ) => res.send("Route for Shop View for ID for ADD ") );
shopRouter.get("/cart", ( req, res ) => res.send(" Route for Shop Cart View") );
shopRouter.post("/cart", ( req, res ) => res.send(" Route for Shop View") );


export{shopRouter}

