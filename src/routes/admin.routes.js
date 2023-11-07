import { Router } from "express";
import { adminController } from "../Controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.get("/",adminController.admin );
adminRouter.get("/create", adminController.createGet);
adminRouter.post("/create", adminController.createPost);
adminRouter.get("/edit/:id", adminController.editGet );
adminRouter.put("/edit/:id", adminController.editPut );
adminRouter.delete("/delete/:id", adminController.delete );



export {adminRouter}