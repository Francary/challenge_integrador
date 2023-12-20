import { Router } from "express";
import { adminController }  from "../Controllers/admin.controller.js";
import { upload } from "../middlewares/uploadFiles.js";


const adminRouter = Router();

const isLogged = ( req , res, next) => {
    if (req.session.isLogged){
        return next()
    }
    res.status(401).redirect('/auth/login')

}

adminRouter.get("/admin", isLogged, adminController.admin );
adminRouter.get("/create", isLogged, adminController.createGet);
adminRouter.post("/create", upload.array('imagenes', 2 ) , adminController.createPost);
adminRouter.get("/edit/:id", isLogged, adminController.editGet );
adminRouter.put("/edit/:id", upload.array('imagenes', 2 ) , adminController.editPut );
adminRouter.delete("/delete/:id", adminController.delete );

export  {
    adminRouter,
}