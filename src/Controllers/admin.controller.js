import { getAll, getOne } from "../models/product.model.js";  

const adminController ={
    admin: async  ( req, res ) => { 
        const data = await getAll()

        res.render("./admin/admin" , {data} ) },

    createGet:      ( req, res ) => res.render("./admin/create") ,

    createPost:     ( req, res ) => res.send(" Route for Admin Create POST View") ,

    editGet: async        ( req, res ) => {
       
        const itemId = req.params.id
        const item =  await getOne(itemId)
        res.render("./admin/edit", { item } )
    },

    editPut:        ( req, res ) => res.send(" Route for Admin Edit ID PUT View"),
    
    delete:         ( req, res ) => res.send(" Route for Admin View"),
};

export  {adminController}

