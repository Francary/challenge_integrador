import { getAllCategory } from "../models/category.model.js";
import { getAllLicence } from "../models/licence.model.js";
import { getAll, getOne , create, editItem, deleteItem } from "../models/product.model.js";  


const adminController ={
    admin: async  ( req, res ) => { 
        const data = await getAll()

        res.render("./admin/admin" , {data} ) },

    createGet:  async    ( req, res ) =>{
        const category = await getAllCategory()
        const licence = await getAllLicence()
        res.render("./admin/create" , { category, licence} )

    },
    

    createPost:  async    ( req, res ) =>{
        
        const product_shema = {
            
            product_name: req.body.product_name.toUpperCase(),
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front:  `/img/products/${req.files[0].filename}`,
            image_back: `/img/products/${req.files[1].filename}`,
            licence_id: Number(req.body.licence),
            category_id: Number(req.body.category),
            
            
        }

        const result = await create([Object.values(product_shema)])
        res.redirect('/admin/admin')

    }, 
     

    editGet: async        ( req, res ) => {
        const category = await getAllCategory()
        const licence = await getAllLicence()
        const itemId = req.params.id
        const item =  await getOne(itemId)
        res.render("./admin/edit", { category, licence, item } )
    },
    
    editPut:  async      ( req, res ) => {

        const verificarImagenes = req.files.length !== 0;
        const itemId = req.params.id
        const item =  await getOne(itemId)
        const product_shema = verificarImagenes ? {
            
            product_name: req.body.product_name.toUpperCase(),
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front: `/img/products/${req.files[0].filename}` ,
            image_back: `/img/products/${req.files[1].filename}`,
            licence_id: Number(req.body.licence),
            category_id: Number(req.body.category),
            
            
        }
        :{
            
            product_name: req.body.product_name.toUpperCase(),
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front: item.image_front ,
            image_back: item.image_back,
            licence_id: Number(req.body.licence),
            category_id: Number(req.body.category),
            
            
        }
        const result =  await editItem(product_shema, itemId)
            
        res.redirect('/admin/admin')
        console.log(result);
    },


    delete: async   ( req, res ) =>{
        const itemId = req.params.id
        await deleteItem({ product_id: itemId})
        res.redirect('/admin/admin')
    }
};

export  {adminController}

