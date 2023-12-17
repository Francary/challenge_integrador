import { Router } from "express";
import { adminController }  from "../Controllers/admin.controller.js";
import { upload } from "../middlewares/uploadFiles.js";


const adminRouter = Router();


adminRouter.get("/admin",adminController.admin );
adminRouter.get("/create", adminController.createGet);
adminRouter.post("/create", upload.array('imagenes', 2 ) , adminController.createPost);
adminRouter.get("/edit/:id", adminController.editGet );
adminRouter.put("/edit/:id", adminController.editPut );
adminRouter.delete("/delete/:id", adminController.delete );

export  {
    adminRouter,

}