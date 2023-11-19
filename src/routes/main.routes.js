const { Router } = require ("express");
const  {mainController}  = require ("../Controllers/main.controller.js");


const mainRouter = Router();

mainRouter.get("/home", mainController.home );
mainRouter.get("/contact", mainController.contact  );
mainRouter.get("/about", mainController.about);
mainRouter.get("/faqs", mainController.faqs );



module.exports = mainRouter