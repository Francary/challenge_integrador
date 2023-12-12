import { Router } from "express";
import { shopController } from "../Controllers/shop.controller.js";

const shopRouter = Router();
shopRouter.get("/", shopController.shop );
shopRouter.get("/item/:id",  shopController.itemGet);
shopRouter.post("/item/:id/add", shopController.itemPost );
shopRouter.get("/cart",  shopController.cartGet);
shopRouter.post("/cart", shopController.cartPost);


export {shopRouter}

