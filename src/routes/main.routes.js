import { Router } from "express";
import  {mainController}  from "../Controllers/main.controller.js";


const mainRouter = Router();

mainRouter.get("/home", mainController.home );
mainRouter.get("/", mainController.home );
mainRouter.get("/contact", mainController.contact  );
mainRouter.get("/about", mainController.about);
mainRouter.get("/faqs", mainController.faqs );



export  {mainRouter}