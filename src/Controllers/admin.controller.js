import { getAllCategory } from "../models/category.model.js";
import { getAllLicence } from "../models/licence.model.js";
import { getAll, getOne } from "../models/product.model.js";  

const adminController ={
    admin: async  ( req, res ) => { 
        const data = await getAll()

        res.render("./admin/admin" , {data} ) },

    createGet:  async    ( req, res ) =>{
        const category = await getAllCategory()
        const licence = await getAllLicence()
        res.render("./admin/create" , { category, licence} )

    },
    

    createPost:     ( req, res ) =>{

        
        res.send(" Route for Admin Create POST View")


    }, 
     

    editGet: async        ( req, res ) => {
        const category = await getAllCategory()
        const licence = await getAllLicence()
        const itemId = req.params.id
        const item =  await getOne(itemId)
        res.render("./admin/edit", { category, licence, item } )
    },

    editPut:        ( req, res ) => res.send(" Route for Admin Edit ID PUT View"),
    
    delete:         ( req, res ) => res.send(" Route for Admin View"),
};

export  {adminController}

